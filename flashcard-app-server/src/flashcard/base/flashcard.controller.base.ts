/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import { isRecordNotFoundError } from '../../prisma.util';
import * as errors from '../../errors';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { ApiNestedQuery } from '../../decorators/api-nested-query.decorator';
import * as nestAccessControl from 'nest-access-control';
import * as defaultAuthGuard from '../../auth/defaultAuth.guard';
import { FlashcardService } from '../flashcard.service';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { FlashcardCreateInput } from './FlashcardCreateInput';
import { Flashcard } from './Flashcard';
import { FlashcardFindManyArgs } from './FlashcardFindManyArgs';
import { FlashcardWhereUniqueInput } from './FlashcardWhereUniqueInput';
import { FlashcardUpdateInput } from './FlashcardUpdateInput';
import { UserProgressFindManyArgs } from '../../userProgress/base/UserProgressFindManyArgs';
import { UserProgress } from '../../userProgress/base/UserProgress';
import { UserProgressWhereUniqueInput } from '../../userProgress/base/UserProgressWhereUniqueInput';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FlashcardControllerBase {
  constructor(
    protected readonly service: FlashcardService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Flashcard })
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: FlashcardCreateInput,
  })
  async createFlashcard(
    @common.Body() data: FlashcardCreateInput,
  ): Promise<Flashcard> {
    return await this.service.createFlashcard({
      data: {
        ...data,

        language: data.language
          ? {
              connect: data.language,
            }
          : undefined,

        category: data.category
          ? {
              connect: data.category,
            }
          : undefined,

        level: data.level
          ? {
              connect: data.level,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Flashcard] })
  @ApiNestedQuery(FlashcardFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async flashcards(
    @common.Req() request: Request,
    @common.Query('languageId') languageId?: string,
    @common.Query('levelId') levelId?: string,
    @common.Query('categoryId') categoryId?: string,
  ): Promise<Flashcard[]> {
    const args = plainToClass(FlashcardFindManyArgs, request.query);

    // Dodaj warunki filtrowania
    const where = {
      ...(args.where || {}),
      ...(languageId && { languageId }),
      ...(levelId && { levelId }),
      ...(categoryId && { categoryId }),
    };

    return this.service.flashcards({
      ...args,
      where,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id')
  @swagger.ApiOkResponse({ type: Flashcard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'read',
    possession: 'own',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async flashcard(
    @common.Param() params: FlashcardWhereUniqueInput,
  ): Promise<Flashcard | null> {
    const result = await this.service.flashcard({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`,
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch('/:id')
  @swagger.ApiOkResponse({ type: Flashcard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: FlashcardUpdateInput,
  })
  async updateFlashcard(
    @common.Param() params: FlashcardWhereUniqueInput,
    @common.Body() data: FlashcardUpdateInput,
  ): Promise<Flashcard | null> {
    try {
      return await this.service.updateFlashcard({
        where: params,
        data: {
          ...data,

          language: data.language
            ? {
                connect: data.language,
              }
            : undefined,

          category: data.category
            ? {
                connect: data.category,
              }
            : undefined,

          level: data.level
            ? {
                connect: data.level,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Flashcard })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFlashcard(
    @common.Param() params: FlashcardWhereUniqueInput,
  ): Promise<Flashcard | null> {
    try {
      return await this.service.deleteFlashcard({
        where: params,
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
  @common.Get('/:id/userProgresses')
  @ApiNestedQuery(UserProgressFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'read',
    possession: 'any',
  })
  async findUserProgresses(
    @common.Req() request: Request,
    @common.Param() params: FlashcardWhereUniqueInput,
  ): Promise<UserProgress[]> {
    const query = plainToClass(UserProgressFindManyArgs, request.query);
    const results = await this.service.findUserProgresses(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        correctAnswers: true,
        incorrectAnswers: true,

        user: {
          select: {
            id: true,
          },
        },

        flashcard: {
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

  @common.Post('/:id/userProgresses')
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'update',
    possession: 'any',
  })
  async connectUserProgresses(
    @common.Param() params: FlashcardWhereUniqueInput,
    @common.Body() body: UserProgressWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      userProgresses: {
        connect: body,
      },
    };
    await this.service.updateFlashcard({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch('/:id/userProgresses')
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'update',
    possession: 'any',
  })
  async updateUserProgresses(
    @common.Param() params: FlashcardWhereUniqueInput,
    @common.Body() body: UserProgressWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      userProgresses: {
        set: body,
      },
    };
    await this.service.updateFlashcard({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete('/:id/userProgresses')
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'update',
    possession: 'any',
  })
  async disconnectUserProgresses(
    @common.Param() params: FlashcardWhereUniqueInput,
    @common.Body() body: UserProgressWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      userProgresses: {
        disconnect: body,
      },
    };
    await this.service.updateFlashcard({
      where: params,
      data,
      select: { id: true },
    });
  }
}
