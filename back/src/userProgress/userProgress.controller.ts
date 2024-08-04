import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserProgressService } from "./userProgress.service";
import { UserProgressControllerBase } from "./base/userProgress.controller.base";

@swagger.ApiTags("userProgresses")
@common.Controller("userProgresses")
export class UserProgressController extends UserProgressControllerBase {
  constructor(
    protected readonly service: UserProgressService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
