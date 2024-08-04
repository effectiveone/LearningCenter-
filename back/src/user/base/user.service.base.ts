import { PrismaService } from '../../prisma/prisma.service';

import {
  Prisma,
  User as PrismaUser,
  UserProgress as PrismaUserProgress,
  UserSet as PrismaUserSet,
} from '@prisma/client';

import { PasswordService } from '../../auth/password.service';
import { transformStringFieldUpdateInput } from '../../prisma.util';

export class UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService,
  ) {}

  async count(args: Omit<Prisma.UserCountArgs, 'select'>): Promise<number> {
    return this.prisma.user.count(args);
  }

  async users(args: Prisma.UserFindManyArgs): Promise<PrismaUser[]> {
    return this.prisma.user.findMany(args);
  }
  async user(args: Prisma.UserFindUniqueArgs): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique(args);
  }
  async createUser(args: Prisma.UserCreateArgs): Promise<PrismaUser> {
    return this.prisma.user.create({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async updateUser(args: Prisma.UserUpdateArgs): Promise<PrismaUser> {
    return this.prisma.user.update({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password),
          )),
      },
    });
  }
  async deleteUser(args: Prisma.UserDeleteArgs): Promise<PrismaUser> {
    return this.prisma.user.delete(args);
  }

  async findUserProgresses(
    parentId: string,
    args: Prisma.UserProgressFindManyArgs,
  ): Promise<PrismaUserProgress[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .userProgresses(args);
  }

  async findUserSets(
    parentId: string,
    args: Prisma.UserSetFindManyArgs,
  ): Promise<PrismaUserSet[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .userSets(args);
  }
}
