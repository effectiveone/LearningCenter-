import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { LanguageWhereUniqueInput } from '../../language/base/LanguageWhereUniqueInput';
import { Type } from 'class-transformer';
import { CategoryWhereUniqueInput } from '../../category/base/CategoryWhereUniqueInput';
import { LevelWhereUniqueInput } from '../../level/base/LevelWhereUniqueInput';
import { UserProgressUpdateManyWithoutFlashcardsInput } from './UserProgressUpdateManyWithoutFlashcardsInput';

@InputType()
class FlashcardUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  question?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  answer?: string | null;

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
  language?: LanguageWhereUniqueInput | null;

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
  category?: CategoryWhereUniqueInput | null;

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
  level?: LevelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserProgressUpdateManyWithoutFlashcardsInput,
  })
  @ValidateNested()
  @Type(() => UserProgressUpdateManyWithoutFlashcardsInput)
  @IsOptional()
  @Field(() => UserProgressUpdateManyWithoutFlashcardsInput, {
    nullable: true,
  })
  userProgresses?: UserProgressUpdateManyWithoutFlashcardsInput;
}

export { FlashcardUpdateInput as FlashcardUpdateInput };
