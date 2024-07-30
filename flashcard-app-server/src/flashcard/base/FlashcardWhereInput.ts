import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { StringFilter } from '../../util/StringFilter';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { StringNullableFilter } from '../../util/StringNullableFilter';
import { LanguageWhereUniqueInput } from '../../language/base/LanguageWhereUniqueInput';
import { CategoryWhereUniqueInput } from '../../category/base/CategoryWhereUniqueInput';
import { LevelWhereUniqueInput } from '../../level/base/LevelWhereUniqueInput';
import { UserProgressListRelationFilter } from '../../userProgress/base/UserProgressListRelationFilter';

@InputType()
class FlashcardWhereInput {
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
  question?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  answer?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => LanguageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LanguageWhereUniqueInput)
  @IsOptional()
  @Field(() => LanguageWhereUniqueInput, {
    nullable: true,
  })
  language?: LanguageWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => LevelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LevelWhereUniqueInput)
  @IsOptional()
  @Field(() => LevelWhereUniqueInput, {
    nullable: true,
  })
  level?: LevelWhereUniqueInput;

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
}

export { FlashcardWhereInput as FlashcardWhereInput };
