import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { FlashcardWhereInput } from './FlashcardWhereInput';
import { ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
class FlashcardListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FlashcardWhereInput,
  })
  @ValidateNested()
  @Type(() => FlashcardWhereInput)
  @IsOptional()
  @Field(() => FlashcardWhereInput, {
    nullable: true,
  })
  every?: FlashcardWhereInput;

  @ApiProperty({
    required: false,
    type: () => FlashcardWhereInput,
  })
  @ValidateNested()
  @Type(() => FlashcardWhereInput)
  @IsOptional()
  @Field(() => FlashcardWhereInput, {
    nullable: true,
  })
  some?: FlashcardWhereInput;

  @ApiProperty({
    required: false,
    type: () => FlashcardWhereInput,
  })
  @ValidateNested()
  @Type(() => FlashcardWhereInput)
  @IsOptional()
  @Field(() => FlashcardWhereInput, {
    nullable: true,
  })
  none?: FlashcardWhereInput;
}
export { FlashcardListRelationFilter as FlashcardListRelationFilter };
