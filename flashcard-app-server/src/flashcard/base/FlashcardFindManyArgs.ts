import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { FlashcardWhereInput } from './FlashcardWhereInput';
import { IsOptional, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { FlashcardOrderByInput } from './FlashcardOrderByInput';

@ArgsType()
class FlashcardFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FlashcardWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FlashcardWhereInput, { nullable: true })
  @Type(() => FlashcardWhereInput)
  where?: FlashcardWhereInput;

  @ApiProperty({
    required: false,
    type: [FlashcardOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FlashcardOrderByInput], { nullable: true })
  @Type(() => FlashcardOrderByInput)
  orderBy?: Array<FlashcardOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FlashcardFindManyArgs as FlashcardFindManyArgs };
