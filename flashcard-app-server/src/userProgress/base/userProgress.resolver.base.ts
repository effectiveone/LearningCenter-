import * as graphql from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { isRecordNotFoundError } from '../../prisma.util';
import { MetaQueryPayload } from '../../util/MetaQueryPayload';
import * as nestAccessControl from 'nest-access-control';
import * as gqlACGuard from '../../auth/gqlAC.guard';
import { GqlDefaultAuthGuard } from '../../auth/gqlDefaultAuth.guard';
import * as common from '@nestjs/common';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { UserProgress } from './UserProgress';
import { UserProgressCountArgs } from './UserProgressCountArgs';
import { UserProgressFindManyArgs } from './UserProgressFindManyArgs';
import { UserProgressFindUniqueArgs } from './UserProgressFindUniqueArgs';
import { CreateUserProgressArgs } from './CreateUserProgressArgs';
import { UpdateUserProgressArgs } from './UpdateUserProgressArgs';
import { DeleteUserProgressArgs } from './DeleteUserProgressArgs';
import { User } from '../../user/base/User';
import { Flashcard } from '../../flashcard/base/Flashcard';
import { UserProgressService } from '../userProgress.service';
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserProgress)
export class UserProgressResolverBase {
  constructor(
    protected readonly service: UserProgressService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'read',
    possession: 'any',
  })
  async _userProgressesMeta(
    @graphql.Args() args: UserProgressCountArgs,
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserProgress])
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'read',
    possession: 'any',
  })
  async userProgresses(
    @graphql.Args() args: UserProgressFindManyArgs,
  ): Promise<UserProgress[]> {
    return this.service.userProgresses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserProgress, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'read',
    possession: 'own',
  })
  async userProgress(
    @graphql.Args() args: UserProgressFindUniqueArgs,
  ): Promise<UserProgress | null> {
    const result = await this.service.userProgress(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserProgress)
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'create',
    possession: 'any',
  })
  async createUserProgress(
    @graphql.Args() args: CreateUserProgressArgs,
  ): Promise<UserProgress> {
    return await this.service.createUserProgress({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,

        flashcard: args.data.flashcard
          ? {
              connect: args.data.flashcard,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserProgress)
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'update',
    possession: 'any',
  })
  async updateUserProgress(
    @graphql.Args() args: UpdateUserProgressArgs,
  ): Promise<UserProgress | null> {
    try {
      return await this.service.updateUserProgress({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,

          flashcard: args.data.flashcard
            ? {
                connect: args.data.flashcard,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`,
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserProgress)
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'delete',
    possession: 'any',
  })
  async deleteUserProgress(
    @graphql.Args() args: DeleteUserProgressArgs,
  ): Promise<UserProgress | null> {
    try {
      return await this.service.deleteUserProgress(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`,
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: 'user',
  })
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'read',
    possession: 'any',
  })
  async getUser(@graphql.Parent() parent: UserProgress): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Flashcard, {
    nullable: true,
    name: 'flashcard',
  })
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'read',
    possession: 'any',
  })
  async getFlashcard(
    @graphql.Parent() parent: UserProgress,
  ): Promise<Flashcard | null> {
    const result = await this.service.getFlashcard(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
