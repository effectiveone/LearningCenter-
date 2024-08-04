import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import { isRecordNotFoundError } from '../../prisma.util';
import * as errors from '../../errors';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { ApiNestedQuery } from '../../decorators/api-nested-query.decorator';
import * as nestAccessControl from 'nest-access-control';
import * as defaultAuthGuard from '../../auth/defaultAuth.guard';
import { LanguageService } from '../language.service';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { LanguageCreateInput } from './LanguageCreateInput';
import { Language } from './Language';
import { LanguageFindManyArgs } from './LanguageFindManyArgs';
import { LanguageWhereUniqueInput } from './LanguageWhereUniqueInput';
import { LanguageUpdateInput } from './LanguageUpdateInput';
import { FlashcardFindManyArgs } from '../../flashcard/base/FlashcardFindManyArgs';
import { Flashcard } from '../../flashcard/base/Flashcard';
import { FlashcardWhereUniqueInput } from '../../flashcard/base/FlashcardWhereUniqueInput';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LanguageControllerBase {
  constructor(
    protected readonly service: LanguageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Language })
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: LanguageCreateInput,
  })
  async createLanguage(
    @common.Body() data: LanguageCreateInput,
  ): Promise<Language> {
    return await this.service.createLanguage({
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
  @swagger.ApiOkResponse({ type: [Language] })
  @ApiNestedQuery(LanguageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async languages(@common.Req() request: Request): Promise<Language[]> {
    const args = plainToClass(LanguageFindManyArgs, request.query);
    return this.service.languages({
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
  @swagger.ApiOkResponse({ type: Language })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'read',
    possession: 'own',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async language(
    @common.Param() params: LanguageWhereUniqueInput,
  ): Promise<Language | null> {
    const result = await this.service.language({
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
  @swagger.ApiOkResponse({ type: Language })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: LanguageUpdateInput,
  })
  async updateLanguage(
    @common.Param() params: LanguageWhereUniqueInput,
    @common.Body() data: LanguageUpdateInput,
  ): Promise<Language | null> {
    try {
      return await this.service.updateLanguage({
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
  @swagger.ApiOkResponse({ type: Language })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLanguage(
    @common.Param() params: LanguageWhereUniqueInput,
  ): Promise<Language | null> {
    try {
      return await this.service.deleteLanguage({
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
    @common.Param() params: LanguageWhereUniqueInput,
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
    resource: 'Language',
    action: 'update',
    possession: 'any',
  })
  async connectFlashcards(
    @common.Param() params: LanguageWhereUniqueInput,
    @common.Body() body: FlashcardWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      flashcards: {
        connect: body,
      },
    };
    await this.service.updateLanguage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch('/:id/flashcards')
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'update',
    possession: 'any',
  })
  async updateFlashcards(
    @common.Param() params: LanguageWhereUniqueInput,
    @common.Body() body: FlashcardWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      flashcards: {
        set: body,
      },
    };
    await this.service.updateLanguage({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete('/:id/flashcards')
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'update',
    possession: 'any',
  })
  async disconnectFlashcards(
    @common.Param() params: LanguageWhereUniqueInput,
    @common.Body() body: FlashcardWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      flashcards: {
        disconnect: body,
      },
    };
    await this.service.updateLanguage({
      where: params,
      data,
      select: { id: true },
    });
  }
}