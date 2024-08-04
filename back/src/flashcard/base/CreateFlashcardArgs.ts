import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { FlashcardCreateInput } from './FlashcardCreateInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class CreateFlashcardArgs {
  @ApiProperty({
    required: true,
    type: () => FlashcardCreateInput,
  })
  @ValidateNested()
  @Type(() => FlashcardCreateInput)
  @Field(() => FlashcardCreateInput, { nullable: false })
  data!: FlashcardCreateInput;
}

export { CreateFlashcardArgs as CreateFlashcardArgs };
