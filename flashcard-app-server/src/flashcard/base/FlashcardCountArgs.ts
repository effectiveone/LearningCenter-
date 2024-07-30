import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { FlashcardWhereInput } from './FlashcardWhereInput';
import { Type } from 'class-transformer';

@ArgsType()
class FlashcardCountArgs {
  @ApiProperty({
    required: false,
    type: () => FlashcardWhereInput,
  })
  @Field(() => FlashcardWhereInput, { nullable: true })
  @Type(() => FlashcardWhereInput)
  where?: FlashcardWhereInput;
}

export { FlashcardCountArgs as FlashcardCountArgs };
