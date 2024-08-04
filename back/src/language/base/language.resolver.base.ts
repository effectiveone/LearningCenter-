import * as graphql from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { isRecordNotFoundError } from '../../prisma.util';
import { MetaQueryPayload } from '../../util/MetaQueryPayload';
import * as nestAccessControl from 'nest-access-control';
import * as gqlACGuard from '../../auth/gqlAC.guard';
import { GqlDefaultAuthGuard } from '../../auth/gqlDefaultAuth.guard';
import * as common from '@nestjs/common';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { Language } from './Language';
import { LanguageCountArgs } from './LanguageCountArgs';
import { LanguageFindManyArgs } from './LanguageFindManyArgs';
import { LanguageFindUniqueArgs } from './LanguageFindUniqueArgs';
import { CreateLanguageArgs } from './CreateLanguageArgs';
import { UpdateLanguageArgs } from './UpdateLanguageArgs';
import { DeleteLanguageArgs } from './DeleteLanguageArgs';
import { FlashcardFindManyArgs } from '../../flashcard/base/FlashcardFindManyArgs';
import { Flashcard } from '../../flashcard/base/Flashcard';
import { LanguageService } from '../language.service';
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Language)
export class LanguageResolverBase {
  constructor(
    protected readonly service: LanguageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'read',
    possession: 'any',
  })
  async _languagesMeta(
    @graphql.Args() args: LanguageCountArgs,
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Language])
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'read',
    possession: 'any',
  })
  async languages(
    @graphql.Args() args: LanguageFindManyArgs,
  ): Promise<Language[]> {
    return this.service.languages(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Language, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'read',
    possession: 'own',
  })
  async language(
    @graphql.Args() args: LanguageFindUniqueArgs,
  ): Promise<Language | null> {
    const result = await this.service.language(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Language)
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'create',
    possession: 'any',
  })
  async createLanguage(
    @graphql.Args() args: CreateLanguageArgs,
  ): Promise<Language> {
    return await this.service.createLanguage({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Language)
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'update',
    possession: 'any',
  })
  async updateLanguage(
    @graphql.Args() args: UpdateLanguageArgs,
  ): Promise<Language | null> {
    try {
      return await this.service.updateLanguage({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`,
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Language)
  @nestAccessControl.UseRoles({
    resource: 'Language',
    action: 'delete',
    possession: 'any',
  })
  async deleteLanguage(
    @graphql.Args() args: DeleteLanguageArgs,
  ): Promise<Language | null> {
    try {
      return await this.service.deleteLanguage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`,
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Flashcard], { name: 'flashcards' })
  @nestAccessControl.UseRoles({
    resource: 'Flashcard',
    action: 'read',
    possession: 'any',
  })
  async findFlashcards(
    @graphql.Parent() parent: Language,
    @graphql.Args() args: FlashcardFindManyArgs,
  ): Promise<Flashcard[]> {
    const results = await this.service.findFlashcards(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
