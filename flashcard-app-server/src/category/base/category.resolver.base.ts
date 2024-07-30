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
import { Category } from './Category';
import { CategoryCountArgs } from './CategoryCountArgs';
import { CategoryFindManyArgs } from './CategoryFindManyArgs';
import { CategoryFindUniqueArgs } from './CategoryFindUniqueArgs';
import { CreateCategoryArgs } from './CreateCategoryArgs';
import { UpdateCategoryArgs } from './UpdateCategoryArgs';
import { DeleteCategoryArgs } from './DeleteCategoryArgs';
import { FlashcardFindManyArgs } from '../../flashcard/base/FlashcardFindManyArgs';
import { Flashcard } from '../../flashcard/base/Flashcard';
import { CategoryService } from '../category.service';
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Category)
export class CategoryResolverBase {
  constructor(
    protected readonly service: CategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'read',
    possession: 'any',
  })
  async _categoriesMeta(
    @graphql.Args() args: CategoryCountArgs,
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Category])
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'read',
    possession: 'any',
  })
  async categories(
    @graphql.Args() args: CategoryFindManyArgs,
  ): Promise<Category[]> {
    return this.service.categories(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Category, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'read',
    possession: 'own',
  })
  async category(
    @graphql.Args() args: CategoryFindUniqueArgs,
  ): Promise<Category | null> {
    const result = await this.service.category(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'create',
    possession: 'any',
  })
  async createCategory(
    @graphql.Args() args: CreateCategoryArgs,
  ): Promise<Category> {
    return await this.service.createCategory({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'update',
    possession: 'any',
  })
  async updateCategory(
    @graphql.Args() args: UpdateCategoryArgs,
  ): Promise<Category | null> {
    try {
      return await this.service.updateCategory({
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

  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'delete',
    possession: 'any',
  })
  async deleteCategory(
    @graphql.Args() args: DeleteCategoryArgs,
  ): Promise<Category | null> {
    try {
      return await this.service.deleteCategory(args);
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
    @graphql.Parent() parent: Category,
    @graphql.Args() args: FlashcardFindManyArgs,
  ): Promise<Flashcard[]> {
    const results = await this.service.findFlashcards(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
