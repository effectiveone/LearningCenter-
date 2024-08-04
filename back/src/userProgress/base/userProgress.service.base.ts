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
  async createUserProgress(args: Prisma.UserProgressCreateArgs): Promise<PrismaUserProgress> {
    console.log('Argumenty w serwisie:', JSON.stringify(args, null, 2));
    
    // Usuń wszystkie pola, które są undefined
    const cleanedData = Object.fromEntries(
      Object.entries(args.data).filter(([_, v]) => v != null)
    );
  
    // Sprawdź wszystkie ID
    if (cleanedData.user?.connect?.id) {
      console.log('User ID:', cleanedData.user.connect.id);
    }
    if (cleanedData.flashcard?.connect?.id) {
      console.log('Flashcard ID:', cleanedData.flashcard.connect.id);
    }
    if (cleanedData.category?.connect?.id) {
      console.log('Category ID:', cleanedData.category.connect.id);
    }
    if (cleanedData.level?.connect?.id) {
      console.log('Level ID:', cleanedData.level.connect.id);
    }
    if (cleanedData.language?.connect?.id) {
      console.log('Language ID:', cleanedData.language.connect.id);
    }
  
    return this.prisma.userProgress.create({
      ...args,
      data: cleanedData,
    });
  }


  async getUserByUsername(username: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { username },
    });
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

  async getFlashcard(flashcardId: string): Promise<PrismaFlashcard | null> {
    console.log('Szukam fiszki o ID:', flashcardId);
    return this.prisma.flashcard.findUnique({
      where: { id: flashcardId },
      include: {
        category: true,
        level: true,
        language: true,
      }
    });
  }