import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { FlashcardCreateNestedManyWithoutCategoriesInput } from './FlashcardCreateNestedManyWithoutCategoriesInput';
import { Type } from 'class-transformer';

@InputType()
class CategoryCreateInput {
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
    type: () => FlashcardCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => FlashcardCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => FlashcardCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  flashcards?: FlashcardCreateNestedManyWithoutCategoriesInput;
}

export { CategoryCreateInput as CategoryCreateInput };
