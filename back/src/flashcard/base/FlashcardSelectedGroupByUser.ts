import { plainToClass } from 'class-transformer';
import { FlashcardFindManyArgs } from './dto/flashcard-find-many.args';
import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import * as nestAccessControl from 'nest-access-control';
import { AclFilterResponseInterceptor } from 'src/interceptors/acl-filter-response.interceptor';
import * as errors from 'src/errors';
import { FlashcardService } from '../flashcard.service';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
@common.Controller('flashcards')
export class FlashcardsSelectedGroupByUser {
  constructor(
    protected readonly service: FlashcardService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/filtered')
  @swagger.ApiOkResponse({ type: [Flashcard] })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async getFilteredFlashcards(
    @common.Query('category') category: string,
    @common.Query('language') language: string,
    @common.Query('level') level: string,
  ): Promise<Flashcard[]> {
    // Logowanie wartości zapytań
    console.log('Received query parameters:', { category, language, level });

    // Tworzenie argumentów dla metody flashcards
    const args = plainToClass(FlashcardFindManyArgs, {
      where: {
        category: category ? { id: category } : undefined,
        language: language ? { id: language } : undefined,
        level: level ? { id: level } : undefined,
      },
    });

    // Logowanie argumentów przed wywołaniem metody flashcards
    console.log('Arguments for flashcards method:', args);

    // Wywołanie metody flashcards z odpowiednimi argumentami
    return this.service.flashcards({
      ...args,
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
}
