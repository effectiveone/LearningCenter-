import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FlashcardService } from "./flashcard.service";
import { FlashcardControllerBase } from "./base/flashcard.controller.base";

@swagger.ApiTags("flashcards")
@common.Controller("flashcards")
export class FlashcardController extends FlashcardControllerBase {
  constructor(
    protected readonly service: FlashcardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
