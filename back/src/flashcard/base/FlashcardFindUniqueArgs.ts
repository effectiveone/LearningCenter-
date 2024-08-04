import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { FlashcardWhereUniqueInput } from './FlashcardWhereUniqueInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class FlashcardFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => FlashcardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FlashcardWhereUniqueInput)
  @Field(() => FlashcardWhereUniqueInput, { nullable: false })
  where!: FlashcardWhereUniqueInput;
}

export { FlashcardFindUniqueArgs as FlashcardFindUniqueArgs };
