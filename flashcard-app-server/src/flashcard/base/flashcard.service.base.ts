import { PrismaService } from '../../prisma/prisma.service';

import {
  Prisma,
  Flashcard as PrismaFlashcard,
  UserProgress as PrismaUserProgress,
  Language as PrismaLanguage,
  Category as PrismaCategory,
  Level as PrismaLevel,
} from '@prisma/client';

export class FlashcardServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FlashcardCountArgs, 'select'>,
  ): Promise<number> {
    return this.prisma.flashcard.count(args);
  }

  async flashcards(
    args: Prisma.FlashcardFindManyArgs,
  ): Promise<PrismaFlashcard[]> {
    return this.prisma.flashcard.findMany({
      ...args,
      where: args.where,
    });
  }
  async flashcard(
    args: Prisma.FlashcardFindUniqueArgs,
  ): Promise<PrismaFlashcard | null> {
    return this.prisma.flashcard.findUnique(args);
  }
  async createFlashcard(
    args: Prisma.FlashcardCreateArgs,
  ): Promise<PrismaFlashcard> {
    return this.prisma.flashcard.create(args);
  }
  async updateFlashcard(
    args: Prisma.FlashcardUpdateArgs,
  ): Promise<PrismaFlashcard> {
    return this.prisma.flashcard.update(args);
  }
  async deleteFlashcard(
    args: Prisma.FlashcardDeleteArgs,
  ): Promise<PrismaFlashcard> {
    return this.prisma.flashcard.delete(args);
  }

  async findUserProgresses(
    parentId: string,
    args: Prisma.UserProgressFindManyArgs,
  ): Promise<PrismaUserProgress[]> {
    return this.prisma.flashcard
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .userProgresses(args);
  }

  async getLanguage(parentId: string): Promise<PrismaLanguage | null> {
    return this.prisma.flashcard
      .findUnique({
        where: { id: parentId },
      })
      .language();
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.flashcard
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }

  async getLevel(parentId: string): Promise<PrismaLevel | null> {
    return this.prisma.flashcard
      .findUnique({
        where: { id: parentId },
      })
      .level();
  }
}
