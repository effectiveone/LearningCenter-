import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserSetServiceBase } from "./base/userSet.service.base";

@Injectable()
export class UserSetService extends UserSetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
