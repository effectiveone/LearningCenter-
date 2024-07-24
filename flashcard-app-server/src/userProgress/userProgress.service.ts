import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserProgressServiceBase } from "./base/userProgress.service.base";

@Injectable()
export class UserProgressService extends UserProgressServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
