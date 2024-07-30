import { PrismaService } from '../../prisma/prisma.service';
import {
  Prisma,
  Level as PrismaLevel,
  Flashcard as PrismaFlashcard,
} from '@prisma/client';

export class LevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LevelCountArgs, 'select'>): Promise<number> {
    return this.prisma.level.count(args);
  }

  async levels(args: Prisma.LevelFindManyArgs): Promise<PrismaLevel[]> {
    return this.prisma.level.findMany(args);
  }
  async level(args: Prisma.LevelFindUniqueArgs): Promise<PrismaLevel | null> {
    return this.prisma.level.findUnique(args);
  }
  async createLevel(args: Prisma.LevelCreateArgs): Promise<PrismaLevel> {
    return this.prisma.level.create(args);
  }
  async updateLevel(args: Prisma.LevelUpdateArgs): Promise<PrismaLevel> {
    return this.prisma.level.update(args);
  }
  async deleteLevel(args: Prisma.LevelDeleteArgs): Promise<PrismaLevel> {
    return this.prisma.level.delete(args);
  }

  async findFlashcards(
    parentId: string,
    args: Prisma.FlashcardFindManyArgs,
  ): Promise<PrismaFlashcard[]> {
    return this.prisma.level
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .flashcards(args);
  }
}
