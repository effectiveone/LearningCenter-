import { PrismaService } from '../../prisma/prisma.service';
import {
  Prisma,
  Category as PrismaCategory,
  Flashcard as PrismaFlashcard,
} from '@prisma/client';

export class CategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CategoryCountArgs, 'select'>): Promise<number> {
    return this.prisma.category.count(args);
  }

  async categories(
    args: Prisma.CategoryFindManyArgs,
  ): Promise<PrismaCategory[]> {
    return this.prisma.category.findMany(args);
  }
  async category(
    args: Prisma.CategoryFindUniqueArgs,
  ): Promise<PrismaCategory | null> {
    return this.prisma.category.findUnique(args);
  }
  async createCategory(
    args: Prisma.CategoryCreateArgs,
  ): Promise<PrismaCategory> {
    return this.prisma.category.create(args);
  }
  async updateCategory(
    args: Prisma.CategoryUpdateArgs,
  ): Promise<PrismaCategory> {
    return this.prisma.category.update(args);
  }
  async deleteCategory(
    args: Prisma.CategoryDeleteArgs,
  ): Promise<PrismaCategory> {
    return this.prisma.category.delete(args);
  }

  async findFlashcards(
    parentId: string,
    args: Prisma.FlashcardFindManyArgs,
  ): Promise<PrismaFlashcard[]> {
    return this.prisma.category
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .flashcards(args);
  }
}
