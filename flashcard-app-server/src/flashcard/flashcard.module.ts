import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FlashcardModuleBase } from "./base/flashcard.module.base";
import { FlashcardService } from "./flashcard.service";
import { FlashcardController } from "./flashcard.controller";
import { FlashcardResolver } from "./flashcard.resolver";

@Module({
  imports: [FlashcardModuleBase, forwardRef(() => AuthModule)],
  controllers: [FlashcardController],
  providers: [FlashcardService, FlashcardResolver],
  exports: [FlashcardService],
})
export class FlashcardModule {}
