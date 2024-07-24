import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserSetModuleBase } from "./base/userSet.module.base";
import { UserSetService } from "./userSet.service";
import { UserSetController } from "./userSet.controller";
import { UserSetResolver } from "./userSet.resolver";

@Module({
  imports: [UserSetModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserSetController],
  providers: [UserSetService, UserSetResolver],
  exports: [UserSetService],
})
export class UserSetModule {}
