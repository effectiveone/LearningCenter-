import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { FlashcardUpdateManyWithoutLanguagesInput } from './FlashcardUpdateManyWithoutLanguagesInput';
import { Type } from 'class-transformer';

@InputType()
class LanguageUpdateInput {
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
    type: () => FlashcardUpdateManyWithoutLanguagesInput,
  })
  @ValidateNested()
  @Type(() => FlashcardUpdateManyWithoutLanguagesInput)
  @IsOptional()
  @Field(() => FlashcardUpdateManyWithoutLanguagesInput, {
    nullable: true,
  })
  flashcards?: FlashcardUpdateManyWithoutLanguagesInput;
}

export { LanguageUpdateInput as LanguageUpdateInput };
