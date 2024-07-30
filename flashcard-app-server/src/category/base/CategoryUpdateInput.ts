import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { FlashcardUpdateManyWithoutCategoriesInput } from './FlashcardUpdateManyWithoutCategoriesInput';
import { Type } from 'class-transformer';

@InputType()
class CategoryUpdateInput {
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
    type: () => FlashcardUpdateManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => FlashcardUpdateManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => FlashcardUpdateManyWithoutCategoriesInput, {
    nullable: true,
  })
  flashcards?: FlashcardUpdateManyWithoutCategoriesInput;
}

export { CategoryUpdateInput as CategoryUpdateInput };
