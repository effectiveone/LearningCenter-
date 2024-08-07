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
import { Flashcard } from './Flashcard';
import { FlashcardCountArgs } from './FlashcardCountArgs';
import { FlashcardFindManyArgs } from './FlashcardFindManyArgs';
import { FlashcardFindUniqueArgs } from './FlashcardFindUniqueArgs';
import { CreateFlashcardArgs } from './CreateFlashcardArgs';
import { UpdateFlashcardArgs } from './UpdateFlashcardArgs';
import { DeleteFlashcardArgs } from './DeleteFlashcardArgs';
import { UserProgressFindManyArgs } from '../../userProgress/base/UserProgressFindManyArgs';
import { UserProgress } from '../../userProgress/base/UserProgress';
import { Language } from '../../language/base/Language';
import { Category } from '../../category/base/Category';
import { Level } from '../../level/base/Level';
import { FlashcardService } from '../flashcard.service';
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Flashcard)
export class FlashcardResolverBase {
  constructor(
    protected readonly service: FlashcardService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'read',
    possession: 'any',
  })
  async _flashcardsMeta(
    @graphql.Args() args: FlashcardCountArgs,
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Flashcard])
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'read',
    possession: 'any',
  })
  async flashcards(
    @graphql.Args() args: FlashcardFindManyArgs,
  ): Promise<Flashcard[]> {
    return this.service.flashcards(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Flashcard, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'read',
    possession: 'own',
  })
  async flashcard(
    @graphql.Args() args: FlashcardFindUniqueArgs,
  ): Promise<Flashcard | null> {
    const result = await this.service.flashcard(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Flashcard)
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'create',
    possession: 'any',
  })
  async createFlashcard(
    @graphql.Args() args: CreateFlashcardArgs,
  ): Promise<Flashcard> {
    return await this.service.createFlashcard({
      ...args,
      data: {
        ...args.data,

        language: args.data.language
          ? {
              connect: args.data.language,
            }
          : undefined,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,

        level: args.data.level
          ? {
              connect: args.data.level,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Flashcard)
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'update',
    possession: 'any',
  })
  async updateFlashcard(
    @graphql.Args() args: UpdateFlashcardArgs,
  ): Promise<Flashcard | null> {
    try {
      return await this.service.updateFlashcard({
        ...args,
        data: {
          ...args.data,

          language: args.data.language
            ? {
                connect: args.data.language,
              }
            : undefined,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,

          level: args.data.level
            ? {
                connect: args.data.level,
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

  @graphql.Mutation(() => Flashcard)
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'delete',
    possession: 'any',
  })
  async deleteFlashcard(
    @graphql.Args() args: DeleteFlashcardArgs,
  ): Promise<Flashcard | null> {
    try {
      return await this.service.deleteFlashcard(args);
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
  @graphql.ResolveField(() => [UserProgress], { name: 'userProgresses' })
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'read',
    possession: 'any',
  })
  async findUserProgresses(
    @graphql.Parent() parent: Flashcard,
    @graphql.Args() args: UserProgressFindManyArgs,
  ): Promise<UserProgress[]> {
    const results = await this.service.findUserProgresses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Language, {
    nullable: true,
    name: 'language',
  })
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'read',
    possession: 'any',
  })
  async getLanguage(
    @graphql.Parent() parent: Flashcard,
  ): Promise<Language | null> {
    const result = await this.service.getLanguage(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: 'category',
  })
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'read',
    possession: 'any',
  })
  async getCategory(
    @graphql.Parent() parent: Flashcard,
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Level, {
    nullable: true,
    name: 'level',
  })
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'read',
    possession: 'any',
  })
  async getLevel(@graphql.Parent() parent: Flashcard): Promise<Level | null> {
    const result = await this.service.getLevel(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
