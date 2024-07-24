import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LevelServiceBase } from "./base/level.service.base";

@Injectable()
export class LevelService extends LevelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
