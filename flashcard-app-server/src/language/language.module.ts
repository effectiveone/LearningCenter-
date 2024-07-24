import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LanguageModuleBase } from "./base/language.module.base";
import { LanguageService } from "./language.service";
import { LanguageController } from "./language.controller";
import { LanguageResolver } from "./language.resolver";

@Module({
  imports: [LanguageModuleBase, forwardRef(() => AuthModule)],
  controllers: [LanguageController],
  providers: [LanguageService, LanguageResolver],
  exports: [LanguageService],
})
export class LanguageModule {}
