import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import { isRecordNotFoundError } from '../../prisma.util';
import * as errors from '../../errors';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { ApiNestedQuery } from '../../decorators/api-nested-query.decorator';
import * as nestAccessControl from 'nest-access-control';
import * as defaultAuthGuard from '../../auth/defaultAuth.guard';
import { UserService } from '../user.service';
import { AclValidateRequestInterceptor } from '../../interceptors/aclValidateRequest.interceptor';
import { AclFilterResponseInterceptor } from '../../interceptors/aclFilterResponse.interceptor';
import { UserCreateInput } from './UserCreateInput';
import { User } from './User';
import { UserFindManyArgs } from './UserFindManyArgs';
import { UserWhereUniqueInput } from './UserWhereUniqueInput';
import { UserUpdateInput } from './UserUpdateInput';
import { UserProgressFindManyArgs } from '../../userProgress/base/UserProgressFindManyArgs';
import { UserProgress } from '../../userProgress/base/UserProgress';
import { UserProgressWhereUniqueInput } from '../../userProgress/base/UserProgressWhereUniqueInput';
import { UserSetFindManyArgs } from '../../userSet/base/UserSetFindManyArgs';
import { UserSet } from '../../userSet/base/UserSet';
import { UserSetWhereUniqueInput } from '../../userSet/base/UserSetWhereUniqueInput';

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'create',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserCreateInput,
  })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id')
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'read',
    possession: 'own',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async user(
    @common.Param() params: UserWhereUniqueInput,
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UserUpdateInput,
  })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput,
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          roles: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'delete',
    possession: 'any',
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput,
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          roles: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id/userProgresses')
  @ApiNestedQuery(UserProgressFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'UserProgress',
    action: 'read',
    possession: 'any',
  })
  async findUserProgresses(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput,
  ): Promise<UserProgress[]> {
    const query = plainToClass(UserProgressFindManyArgs, request.query);
    const results = await this.service.findUserProgresses(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        correctAnswers: true,
        incorrectAnswers: true,

        user: {
          select: {
            id: true,
          },
        },

        flashcard: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`,
      );
    }
    return results;
  }

  @common.Post('/:id/userProgresses')
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async connectUserProgresses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserProgressWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      userProgresses: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch('/:id/userProgresses')
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async updateUserProgresses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserProgressWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      userProgresses: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete('/:id/userProgresses')
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async disconnectUserProgresses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserProgressWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      userProgresses: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get('/:id/userSets')
  @ApiNestedQuery(UserSetFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: 'UserSet',
    action: 'read',
    possession: 'any',
  })
  async findUserSets(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput,
  ): Promise<UserSet[]> {
    const query = plainToClass(UserSetFindManyArgs, request.query);
    const results = await this.service.findUserSets(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`,
      );
    }
    return results;
  }

  @common.Post('/:id/userSets')
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async connectUserSets(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserSetWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      userSets: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch('/:id/userSets')
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async updateUserSets(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserSetWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      userSets: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete('/:id/userSets')
  @nestAccessControl.UseRoles({
    resource: 'User',
    action: 'update',
    possession: 'any',
  })
  async disconnectUserSets(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserSetWhereUniqueInput[],
  ): Promise<void> {
    const data = {
      userSets: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
