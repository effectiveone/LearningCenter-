import { PrismaService } from '../../prisma/prisma.service';
import {
  Prisma,
  UserSet as PrismaUserSet,
  User as PrismaUser,
} from '@prisma/client';

export class UserSetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.UserSetCountArgs, 'select'>): Promise<number> {
    return this.prisma.userSet.count(args);
  }

  async userSets(args: Prisma.UserSetFindManyArgs): Promise<PrismaUserSet[]> {
    return this.prisma.userSet.findMany(args);
  }
  async userSet(
    args: Prisma.UserSetFindUniqueArgs,
  ): Promise<PrismaUserSet | null> {
    return this.prisma.userSet.findUnique(args);
  }
  async createUserSet(args: Prisma.UserSetCreateArgs): Promise<PrismaUserSet> {
    return this.prisma.userSet.create(args);
  }
  async updateUserSet(args: Prisma.UserSetUpdateArgs): Promise<PrismaUserSet> {
    return this.prisma.userSet.update(args);
  }
  async deleteUserSet(args: Prisma.UserSetDeleteArgs): Promise<PrismaUserSet> {
    return this.prisma.userSet.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.userSet
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
