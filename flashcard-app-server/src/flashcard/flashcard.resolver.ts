import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FlashcardResolverBase } from "./base/flashcard.resolver.base";
import { Flashcard } from "./base/Flashcard";
import { FlashcardService } from "./flashcard.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Flashcard)
export class FlashcardResolver extends FlashcardResolverBase {
  constructor(
    protected readonly service: FlashcardService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
