import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { StringFilter } from '../../util/StringFilter';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { StringNullableFilter } from '../../util/StringNullableFilter';
import { FlashcardListRelationFilter } from '../../flashcard/base/FlashcardListRelationFilter';

@InputType()
class LevelWhereInput {
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
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => FlashcardListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FlashcardListRelationFilter)
  @IsOptional()
  @Field(() => FlashcardListRelationFilter, {
    nullable: true,
  })
  flashcards?: FlashcardListRelationFilter;
}

export { LevelWhereInput as LevelWhereInput };
