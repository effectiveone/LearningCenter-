import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { FlashcardCreateNestedManyWithoutLevelsInput } from './FlashcardCreateNestedManyWithoutLevelsInput';
import { Type } from 'class-transformer';

@InputType()
class LevelCreateInput {
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
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => FlashcardCreateNestedManyWithoutLevelsInput,
  })
  @ValidateNested()
  @Type(() => FlashcardCreateNestedManyWithoutLevelsInput)
  @IsOptional()
  @Field(() => FlashcardCreateNestedManyWithoutLevelsInput, {
    nullable: true,
  })
  flashcards?: FlashcardCreateNestedManyWithoutLevelsInput;
}

export { LevelCreateInput as LevelCreateInput };
