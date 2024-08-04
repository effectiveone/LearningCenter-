import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import { isRecordNotFoundError } from '../../prisma.util';
import * as errors from '../../errors';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { ApiNestedQuery } from '../../decorators/api-nested-query.decorator';
import * as nestAccessControl from 'nest-access-control';
import * as defaultAuthGuard from '../../auth/defaultAuth.guard';
import { LevelService } from '../level.service';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { LevelCreateInput } from './LevelCreateInput';
import { Level } from './Level';
import { LevelFindManyArgs } from './LevelFindManyArgs';
import { LevelWhereUniqueInput } from './LevelWhereUniqueInput';
import { LevelUpdateInput } from './LevelUpdateInput';
import { FlashcardFindManyArgs } from '../../flashcard/base/FlashcardFindManyArgs';
import { Flashcard } from '../../flashcard/base/Flashcard';
import { FlashcardWhereUniqueInput } from '../../flashcard/base/FlashcardWhereUniqueInput';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LevelControllerBase {
  constructor(
    protected readonly service: LevelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Level })
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: LevelCreateInput,
  })
  async createLevel(@common.Body() data: LevelCreateInput): Promise<Level> {
    return await this.service.createLevel({
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
  @swagger.ApiOkResponse({ type: [Level] })
  @ApiNestedQuery(LevelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async levels(@common.Req() request: Request): Promise<Level[]> {
    const args = plainToClass(LevelFindManyArgs, request.query);
    return this.service.levels({
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
  @swagger.ApiOkResponse({ type: Level })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'read',
    possession: 'own',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async level(
    @common.Param() params: LevelWhereUniqueInput,
  ): Promise<Level | null> {
    const result = await this.service.level({
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
  @swagger.ApiOkResponse({ type: Level })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: LevelUpdateInput,
  })
  async updateLevel(
    @common.Param() params: LevelWhereUniqueInput,
    @common.Body() data: LevelUpdateInput,
  ): Promise<Level | null> {
    try {
      return await this.service.updateLevel({
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
  @swagger.ApiOkResponse({ type: Level })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLevel(
    @common.Param() params: LevelWhereUniqueInput,
  ): Promise<Level | null> {
    try {
      return await this.service.deleteLevel({
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
    @common.Param() params: LevelWhereUniqueInput,
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
    resource: 'Level',
    action: 'update',
    possession: 'any',
  })
  async connectFlashcards(
    @common.Param() params: LevelWhereUniqueInput,
    @common.Body() body: FlashcardWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      flashcards: {
        connect: body,
      },
    };
    await this.service.updateLevel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch('/:id/flashcards')
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'update',
    possession: 'any',
  })
  async updateFlashcards(
    @common.Param() params: LevelWhereUniqueInput,
    @common.Body() body: FlashcardWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      flashcards: {
        set: body,
      },
    };
    await this.service.updateLevel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete('/:id/flashcards')
  @nestAccessControl.UseRoles({
    resource: 'Level',
    action: 'update',
    possession: 'any',
  })
  async disconnectFlashcards(
    @common.Param() params: LevelWhereUniqueInput,
    @common.Body() body: FlashcardWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      flashcards: {
        disconnect: body,
      },
    };
    await this.service.updateLevel({
      where: params,
      data,
      select: { id: true },
    });
  }
}
