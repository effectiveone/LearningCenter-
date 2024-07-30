import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import { isRecordNotFoundError } from '../../prisma.util';
import * as errors from '../../errors';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { ApiNestedQuery } from '../../decorators/api-nested-query.decorator';
import * as nestAccessControl from 'nest-access-control';
import * as defaultAuthGuard from '../../auth/defaultAuth.guard';
import { UserSetService } from '../userSet.service';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { UserSetCreateInput } from './UserSetCreateInput';
import { UserSet } from './UserSet';
import { UserSetFindManyArgs } from './UserSetFindManyArgs';
import { UserSetWhereUniqueInput } from './UserSetWhereUniqueInput';
import { UserSetUpdateInput } from './UserSetUpdateInput';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserSetControllerBase {
  constructor(
    protected readonly service: UserSetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserSet })
  @nestAccessControl.UseRoles({
    resource: 'UserSet',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserSetCreateInput,
  })
  async createUserSet(
    @common.Body() data: UserSetCreateInput,
  ): Promise<UserSet> {
    return await this.service.createUserSet({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UserSet] })
  @ApiNestedQuery(UserSetFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'UserSet',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userSets(@common.Req() request: Request): Promise<UserSet[]> {
    const args = plainToClass(UserSetFindManyArgs, request.query);
    return this.service.userSets({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id')
  @swagger.ApiOkResponse({ type: UserSet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'UserSet',
    action: 'read',
    possession: 'own',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async userSet(
    @common.Param() params: UserSetWhereUniqueInput,
  ): Promise<UserSet | null> {
    const result = await this.service.userSet({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`,
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch('/:id')
  @swagger.ApiOkResponse({ type: UserSet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'UserSet',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserSetUpdateInput,
  })
  async updateUserSet(
    @common.Param() params: UserSetWhereUniqueInput,
    @common.Body() data: UserSetUpdateInput,
  ): Promise<UserSet | null> {
    try {
      return await this.service.updateUserSet({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`,
        );
      }
      throw error;
    }
  }

  @common.Delete('/:id')
  @swagger.ApiOkResponse({ type: UserSet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'UserSet',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUserSet(
    @common.Param() params: UserSetWhereUniqueInput,
  ): Promise<UserSet | null> {
    try {
      return await this.service.deleteUserSet({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`,
        );
      }
      throw error;
    }
  }
}
