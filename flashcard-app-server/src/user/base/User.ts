import { ObjectType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IsJSONValue } from '../../validators';
import { GraphQLJSON } from 'graphql-type-json';
import { JsonValue } from 'type-fest';
import { UserProgress } from '../../userProgress/base/UserProgress';
import { UserSet } from '../../userSet/base/UserSet';

@ObjectType()
class User {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

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
  firstName!: string | null;

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
  lastName!: string | null;

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
  email!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  roles!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => [UserProgress],
  })
  @ValidateNested()
  @Type(() => UserProgress)
  @IsOptional()
  userProgresses?: Array<UserProgress>;

  @ApiProperty({
    required: false,
    type: () => [UserSet],
  })
  @ValidateNested()
  @Type(() => UserSet)
  @IsOptional()
  userSets?: Array<UserSet>;
}

export { User as User };
