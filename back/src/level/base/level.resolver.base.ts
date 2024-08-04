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
import { Level } from './Level';
import { LevelCountArgs } from './LevelCountArgs';
import { LevelFindManyArgs } from './LevelFindManyArgs';
import { LevelFindUniqueArgs } from './LevelFindUniqueArgs';
import { CreateLevelArgs } from './CreateLevelArgs';
import { UpdateLevelArgs } from './UpdateLevelArgs';
import { DeleteLevelArgs } from './DeleteLevelArgs';
import { FlashcardFindManyArgs } from '../../flashcard/base/FlashcardFindManyArgs';
import { Flashcard } from '../../flashcard/base/Flashcard';
import { LevelService } from '../level.service';
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Level)
export class LevelResolverBase {
  constructor(
    protected readonly service: LevelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'read',
    possession: 'any',
  })
  async _levelsMeta(
    @graphql.Args() args: LevelCountArgs,
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Level])
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'read',
    possession: 'any',
  })
  async levels(@graphql.Args() args: LevelFindManyArgs): Promise<Level[]> {
    return this.service.levels(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Level, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'read',
    possession: 'own',
  })
  async level(
    @graphql.Args() args: LevelFindUniqueArgs,
  ): Promise<Level | null> {
    const result = await this.service.level(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Level)
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'create',
    possession: 'any',
  })
  async createLevel(@graphql.Args() args: CreateLevelArgs): Promise<Level> {
    return await this.service.createLevel({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Level)
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'update',
    possession: 'any',
  })
  async updateLevel(
    @graphql.Args() args: UpdateLevelArgs,
  ): Promise<Level | null> {
    try {
      return await this.service.updateLevel({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Level)
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'delete',
    possession: 'any',
  })
  async deleteLevel(
    @graphql.Args() args: DeleteLevelArgs,
  ): Promise<Level | null> {
    try {
      return await this.service.deleteLevel(args);
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
  @graphql.ResolveField(() => [Flashcard], { name: 'flashcards' })
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'read',
    possession: 'any',
  })
  async findFlashcards(
    @graphql.Parent() parent: Level,
    @graphql.Args() args: FlashcardFindManyArgs,
  ): Promise<Flashcard[]> {
    const results = await this.service.findFlashcards(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
