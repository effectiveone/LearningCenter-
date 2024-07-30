import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import { isRecordNotFoundError } from '../../prisma.util';
import * as errors from '../../errors';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { ApiNestedQuery } from '../../decorators/api-nested-query.decorator';
import * as nestAccessControl from 'nest-access-control';
import * as defaultAuthGuard from '../../auth/defaultAuth.guard';
import { UserProgressService } from '../userProgress.service';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { UserProgressCreateInput } from './UserProgressCreateInput';
import { UserProgress } from './UserProgress';
import { UserProgressFindManyArgs } from './UserProgressFindManyArgs';
import { UserProgressWhereUniqueInput } from './UserProgressWhereUniqueInput';
import { UserProgressUpdateInput } from './UserProgressUpdateInput';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserProgressControllerBase {
  constructor(
    protected readonly service: UserProgressService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserProgress })
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserProgressCreateInput,
  })
  async createUserProgress(
    @common.Body() data: UserProgressCreateInput,
  ): Promise<UserProgress> {
    return await this.service.createUserProgress({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,

        flashcard: data.flashcard
          ? {
              connect: data.flashcard,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserProgress] })
  @ApiNestedQuery(UserProgressFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userProgresses(
    @common.Req() request: Request,
  ): Promise<UserProgress[]> {
    const args = plainToClass(UserProgressFindManyArgs, request.query);
    return this.service.userProgresses({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id')
  @swagger.ApiOkResponse({ type: UserProgress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'read',
    possession: 'own',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userProgress(
    @common.Param() params: UserProgressWhereUniqueInput,
  ): Promise<UserProgress | null> {
    const result = await this.service.userProgress({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`,
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch('/:id')
  @swagger.ApiOkResponse({ type: UserProgress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserProgressUpdateInput,
  })
  async updateUserProgress(
    @common.Param() params: UserProgressWhereUniqueInput,
    @common.Body() data: UserProgressUpdateInput,
  ): Promise<UserProgress | null> {
    try {
      return await this.service.updateUserProgress({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,

          flashcard: data.flashcard
            ? {
                connect: data.flashcard,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: UserProgress })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserProgress(
    @common.Param() params: UserProgressWhereUniqueInput,
  ): Promise<UserProgress | null> {
    try {
      return await this.service.deleteUserProgress({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`,
        );
      }
      throw error;
    }
  }
}
