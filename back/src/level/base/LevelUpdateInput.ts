import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { FlashcardUpdateManyWithoutLevelsInput } from './FlashcardUpdateManyWithoutLevelsInput';
import { Type } from 'class-transformer';

@InputType()
class LevelUpdateInput {
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
    type: () => FlashcardUpdateManyWithoutLevelsInput,
  })
  @ValidateNested()
  @Type(() => FlashcardUpdateManyWithoutLevelsInput)
  @IsOptional()
  @Field(() => FlashcardUpdateManyWithoutLevelsInput, {
    nullable: true,
  })
  flashcards?: FlashcardUpdateManyWithoutLevelsInput;
}

export { LevelUpdateInput as LevelUpdateInput };
