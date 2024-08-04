import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { FlashcardCreateNestedManyWithoutLanguagesInput } from './FlashcardCreateNestedManyWithoutLanguagesInput';
import { Type } from 'class-transformer';

@InputType()
class LanguageCreateInput {
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
    type: () => FlashcardCreateNestedManyWithoutLanguagesInput,
  })
  @ValidateNested()
  @Type(() => FlashcardCreateNestedManyWithoutLanguagesInput)
  @IsOptional()
  @Field(() => FlashcardCreateNestedManyWithoutLanguagesInput, {
    nullable: true,
  })
  flashcards?: FlashcardCreateNestedManyWithoutLanguagesInput;
}

export { LanguageCreateInput as LanguageCreateInput };
