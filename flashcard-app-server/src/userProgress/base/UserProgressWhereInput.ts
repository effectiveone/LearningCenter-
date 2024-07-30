import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { StringFilter } from '../../util/StringFilter';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { IntNullableFilter } from '../../util/IntNullableFilter';
import { UserWhereUniqueInput } from '../../user/base/UserWhereUniqueInput';
import { FlashcardWhereUniqueInput } from '../../flashcard/base/FlashcardWhereUniqueInput';

@InputType()
class UserProgressWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  correctAnswers?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  incorrectAnswers?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => FlashcardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FlashcardWhereUniqueInput)
  @IsOptional()
  @Field(() => FlashcardWhereUniqueInput, {
    nullable: true,
  })
  flashcard?: FlashcardWhereUniqueInput;
}

export { UserProgressWhereInput as UserProgressWhereInput };
