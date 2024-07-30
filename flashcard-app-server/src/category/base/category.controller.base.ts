import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import { isRecordNotFoundError } from '../../prisma.util';
import * as errors from '../../errors';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { ApiNestedQuery } from '../../decorators/api-nested-query.decorator';
import * as nestAccessControl from 'nest-access-control';
import * as defaultAuthGuard from '../../auth/defaultAuth.guard';
import { CategoryService } from '../category.service';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { CategoryCreateInput } from './CategoryCreateInput';
import { Category } from './Category';
import { CategoryFindManyArgs } from './CategoryFindManyArgs';
import { CategoryWhereUniqueInput } from './CategoryWhereUniqueInput';
import { CategoryUpdateInput } from './CategoryUpdateInput';
import { FlashcardFindManyArgs } from '../../flashcard/base/FlashcardFindManyArgs';
import { Flashcard } from '../../flashcard/base/Flashcard';
import { FlashcardWhereUniqueInput } from '../../flashcard/base/FlashcardWhereUniqueInput';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CategoryControllerBase {
  constructor(
    protected readonly service: CategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Category })
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CategoryCreateInput,
  })
  async createCategory(
    @common.Body() data: CategoryCreateInput,
  ): Promise<Category> {
    return await this.service.createCategory({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Category] })
  @ApiNestedQuery(CategoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async categories(@common.Req() request: Request): Promise<Category[]> {
    const args = plainToClass(CategoryFindManyArgs, request.query);
    return this.service.categories({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id')
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'read',
    possession: 'own',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async category(
    @common.Param() params: CategoryWhereUniqueInput,
  ): Promise<Category | null> {
    const result = await this.service.category({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`,
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch('/:id')
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CategoryUpdateInput,
  })
  async updateCategory(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() data: CategoryUpdateInput,
  ): Promise<Category | null> {
    try {
      return await this.service.updateCategory({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`,
        );
      }
      throw error;
    }
  }

  @common.Delete('/:id')
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCategory(
    @common.Param() params: CategoryWhereUniqueInput,
  ): Promise<Category | null> {
    try {
      return await this.service.deleteCategory({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`,
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id/flashcards')
  @ApiNestedQuery(FlashcardFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'read',
    possession: 'any',
  })
  async findFlashcards(
    @common.Req() request: Request,
    @common.Param() params: CategoryWhereUniqueInput,
  ): Promise<Flashcard[]> {
    const query = plainToClass(FlashcardFindManyArgs, request.query);
    const results = await this.service.findFlashcards(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        question: true,
        answer: true,

        language: {
          select: {
            id: true,
          },
        },

        category: {
          select: {
            id: true,
          },
        },

        level: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`,
      );
    }
    return results;
  }

  @common.Post('/:id/flashcards')
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'update',
    possession: 'any',
  })
  async connectFlashcards(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: FlashcardWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      flashcards: {
        connect: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch('/:id/flashcards')
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'update',
    possession: 'any',
  })
  async updateFlashcards(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: FlashcardWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      flashcards: {
        set: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete('/:id/flashcards')
  @nestAccessControl.UseRoles({
    resource: 'Category',
    action: 'update',
    possession: 'any',
  })
  async disconnectFlashcards(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() body: FlashcardWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      flashcards: {
        disconnect: body,
      },
    };
    await this.service.updateCategory({
      where: params,
      data,
      select: { id: true },
    });
  }
}
