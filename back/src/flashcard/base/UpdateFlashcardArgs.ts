import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { FlashcardWhereUniqueInput } from './FlashcardWhereUniqueInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FlashcardUpdateInput } from './FlashcardUpdateInput';

@ArgsType()
class UpdateFlashcardArgs {
  @ApiProperty({
    required: true,
    type: () => FlashcardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FlashcardWhereUniqueInput)
  @Field(() => FlashcardWhereUniqueInput, { nullable: false })
  where!: FlashcardWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FlashcardUpdateInput,
  })
  @ValidateNested()
  @Type(() => FlashcardUpdateInput)
  @Field(() => FlashcardUpdateInput, { nullable: false })
  data!: FlashcardUpdateInput;
}

export { UpdateFlashcardArgs as UpdateFlashcardArgs };