import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FlashcardServiceBase } from "./base/flashcard.service.base";

@Injectable()
export class FlashcardService extends FlashcardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
