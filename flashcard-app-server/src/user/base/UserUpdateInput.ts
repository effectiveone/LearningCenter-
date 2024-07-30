import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { IsJSONValue } from '../../validators';
import { GraphQLJSON } from 'graphql-type-json';
import { InputJsonValue } from '../../types';
import { UserProgressUpdateManyWithoutUsersInput } from './UserProgressUpdateManyWithoutUsersInput';
import { Type } from 'class-transformer';
import { UserSetUpdateManyWithoutUsersInput } from './UserSetUpdateManyWithoutUsersInput';

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => UserProgressUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserProgressUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserProgressUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  userProgresses?: UserProgressUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => UserSetUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserSetUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserSetUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  userSets?: UserSetUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };
