import { PrismaService } from '../../prisma/prisma.service';

import {
  Prisma,
  UserProgress as PrismaUserProgress,
  User as PrismaUser,
  Flashcard as PrismaFlashcard,
} from '@prisma/client';

export class UserProgressServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UserProgressCountArgs, 'select'>,
  ): Promise<number> {
    return this.prisma.userProgress.count(args);
  }

  async userProgresses(
    args: Prisma.UserProgressFindManyArgs,
  ): Promise<PrismaUserProgress[]> {
    return this.prisma.userProgress.findMany(args);
  }
  async userProgress(
    args: Prisma.UserProgressFindUniqueArgs,
  ): Promise<PrismaUserProgress | null> {
    return this.prisma.userProgress.findUnique(args);
  }
  async createUserProgress(
    args: Prisma.UserProgressCreateArgs,
  ): Promise<PrismaUserProgress> {
    return this.prisma.userProgress.create(args);
  }
  async updateUserProgress(
    args: Prisma.UserProgressUpdateArgs,
  ): Promise<PrismaUserProgress> {
    return this.prisma.userProgress.update(args);
  }
  async deleteUserProgress(
    args: Prisma.UserProgressDeleteArgs,
  ): Promise<PrismaUserProgress> {
    return this.prisma.userProgress.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.userProgress
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getFlashcard(parentId: string): Promise<PrismaFlashcard | null> {
    return this.prisma.userProgress
      .findUnique({
        where: { id: parentId },
      })
      .flashcard();
  }
}
