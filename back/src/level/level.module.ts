import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LevelModuleBase } from "./base/level.module.base";
import { LevelService } from "./level.service";
import { LevelController } from "./level.controller";
import { LevelResolver } from "./level.resolver";

@Module({
  imports: [LevelModuleBase, forwardRef(() => AuthModule)],
  controllers: [LevelController],
  providers: [LevelService, LevelResolver],
  exports: [LevelService],
})
export class LevelModule {}
