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
import { UserSet } from './UserSet';
import { UserSetCountArgs } from './UserSetCountArgs';
import { UserSetFindManyArgs } from './UserSetFindManyArgs';
import { UserSetFindUniqueArgs } from './UserSetFindUniqueArgs';
import { CreateUserSetArgs } from './CreateUserSetArgs';
import { UpdateUserSetArgs } from './UpdateUserSetArgs';
import { DeleteUserSetArgs } from './DeleteUserSetArgs';
import { User } from '../../user/base/User';
import { UserSetService } from '../userSet.service';
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserSet)
export class UserSetResolverBase {
  constructor(
    protected readonly service: UserSetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: 'UserSet',
    action: 'read',
    possession: 'any',
  })
  async _userSetsMeta(
    @graphql.Args() args: UserSetCountArgs,
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserSet])
  @nestAccessControl.UseRoles({
    resource: 'UserSet',
    action: 'read',
    possession: 'any',
  })
  async userSets(
    @graphql.Args() args: UserSetFindManyArgs,
  ): Promise<UserSet[]> {
    return this.service.userSets(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserSet, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: 'UserSet',
    action: 'read',
    possession: 'own',
  })
  async userSet(
    @graphql.Args() args: UserSetFindUniqueArgs,
  ): Promise<UserSet | null> {
    const result = await this.service.userSet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserSet)
  @nestAccessControl.UseRoles({
    resource: 'UserSet',
    action: 'create',
    possession: 'any',
  })
  async createUserSet(
    @graphql.Args() args: CreateUserSetArgs,
  ): Promise<UserSet> {
    return await this.service.createUserSet({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserSet)
  @nestAccessControl.UseRoles({
    resource: 'UserSet',
    action: 'update',
    possession: 'any',
  })
  async updateUserSet(
    @graphql.Args() args: UpdateUserSetArgs,
  ): Promise<UserSet | null> {
    try {
      return await this.service.updateUserSet({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
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

  @graphql.Mutation(() => UserSet)
  @nestAccessControl.UseRoles({
    resource: 'UserSet',
    action: 'delete',
    possession: 'any',
  })
  async deleteUserSet(
    @graphql.Args() args: DeleteUserSetArgs,
  ): Promise<UserSet | null> {
    try {
      return await this.service.deleteUserSet(args);
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
  async getUser(@graphql.Parent() parent: UserSet): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
