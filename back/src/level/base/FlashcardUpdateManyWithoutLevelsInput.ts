import { InputType, Field } from '@nestjs/graphql';
import { FlashcardWhereUniqueInput } from '../../flashcard/base/FlashcardWhereUniqueInput';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
class FlashcardUpdateManyWithoutLevelsInput {
  @Field(() => [FlashcardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FlashcardWhereUniqueInput],
  })
  connect?: Array<FlashcardWhereUniqueInput>;

  @Field(() => [FlashcardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FlashcardWhereUniqueInput],
  })
  disconnect?: Array<FlashcardWhereUniqueInput>;

  @Field(() => [FlashcardWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FlashcardWhereUniqueInput],
  })
  set?: Array<FlashcardWhereUniqueInput>;
}

export { FlashcardUpdateManyWithoutLevelsInput as FlashcardUpdateManyWithoutLevelsInput };
