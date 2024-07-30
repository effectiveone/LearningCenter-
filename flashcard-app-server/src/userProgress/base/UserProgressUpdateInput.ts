import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min, Max, IsOptional, ValidateNested } from 'class-validator';
import { UserWhereUniqueInput } from '../../user/base/UserWhereUniqueInput';
import { Type } from 'class-transformer';
import { FlashcardWhereUniqueInput } from '../../flashcard/base/FlashcardWhereUniqueInput';

@InputType()
class UserProgressUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  correctAnswers?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  incorrectAnswers?: number | null;

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
  user?: UserWhereUniqueInput | null;

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
  flashcard?: FlashcardWhereUniqueInput | null;
}

export { UserProgressUpdateInput as UserProgressUpdateInput };
