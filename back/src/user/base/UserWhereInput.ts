import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { StringFilter } from '../../util/StringFilter';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { StringNullableFilter } from '../../util/StringNullableFilter';
import { UserProgressListRelationFilter } from '../../userProgress/base/UserProgressListRelationFilter';
import { UserSetListRelationFilter } from '../../userSet/base/UserSetListRelationFilter';

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserProgressListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserProgressListRelationFilter)
  @IsOptional()
  @Field(() => UserProgressListRelationFilter, {
    nullable: true,
  })
  userProgresses?: UserProgressListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UserSetListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserSetListRelationFilter)
  @IsOptional()
  @Field(() => UserSetListRelationFilter, {
    nullable: true,
  })
  userSets?: UserSetListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
