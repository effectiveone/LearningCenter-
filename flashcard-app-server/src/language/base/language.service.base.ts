import { PrismaService } from '../../prisma/prisma.service';
import {
  Prisma,
  Language as PrismaLanguage,
  Flashcard as PrismaFlashcard,
} from '@prisma/client';

export class LanguageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LanguageCountArgs, 'select'>): Promise<number> {
    return this.prisma.language.count(args);
  }

  async languages(
    args: Prisma.LanguageFindManyArgs,
  ): Promise<PrismaLanguage[]> {
    return this.prisma.language.findMany(args);
  }
  async language(
    args: Prisma.LanguageFindUniqueArgs,
  ): Promise<PrismaLanguage | null> {
    return this.prisma.language.findUnique(args);
  }
  async createLanguage(
    args: Prisma.LanguageCreateArgs,
  ): Promise<PrismaLanguage> {
    return this.prisma.language.create(args);
  }
  async updateLanguage(
    args: Prisma.LanguageUpdateArgs,
  ): Promise<PrismaLanguage> {
    return this.prisma.language.update(args);
  }
  async deleteLanguage(
    args: Prisma.LanguageDeleteArgs,
  ): Promise<PrismaLanguage> {
    return this.prisma.language.delete(args);
  }

  async findFlashcards(
    parentId: string,
    args: Prisma.FlashcardFindManyArgs,
  ): Promise<PrismaFlashcard[]> {
    return this.prisma.language
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .flashcards(args);
  }
}
