import { InputType, Field } from '@nestjs/graphql';
import { FlashcardWhereUniqueInput } from '../../flashcard/base/FlashcardWhereUniqueInput';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
class FlashcardCreateNestedManyWithoutLanguagesInput {
  @Field(() => [FlashcardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FlashcardWhereUniqueInput],
  })
  connect?: Array<FlashcardWhereUniqueInput>;
}

export { FlashcardCreateNestedManyWithoutLanguagesInput as FlashcardCreateNestedManyWithoutLanguagesInput };
