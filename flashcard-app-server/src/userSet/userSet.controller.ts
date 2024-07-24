import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserSetService } from "./userSet.service";
import { UserSetControllerBase } from "./base/userSet.controller.base";

@swagger.ApiTags("userSets")
@common.Controller("userSets")
export class UserSetController extends UserSetControllerBase {
  constructor(
    protected readonly service: UserSetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
