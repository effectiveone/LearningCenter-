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
import { UserProgressCreateNestedManyWithoutUsersInput } from './UserProgressCreateNestedManyWithoutUsersInput';
import { Type } from 'class-transformer';
import { UserSetCreateNestedManyWithoutUsersInput } from './UserSetCreateNestedManyWithoutUsersInput';

@InputType()
class UserCreateInput {
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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => UserProgressCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserProgressCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserProgressCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userProgresses?: UserProgressCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => UserSetCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserSetCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserSetCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userSets?: UserSetCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
