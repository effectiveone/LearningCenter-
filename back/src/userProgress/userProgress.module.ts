import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserProgressModuleBase } from "./base/userProgress.module.base";
import { UserProgressService } from "./userProgress.service";
import { UserProgressController } from "./userProgress.controller";
import { UserProgressResolver } from "./userProgress.resolver";

@Module({
  imports: [UserProgressModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserProgressController],
  providers: [UserProgressService, UserProgressResolver],
  exports: [UserProgressService],
})
export class UserProgressModule {}
