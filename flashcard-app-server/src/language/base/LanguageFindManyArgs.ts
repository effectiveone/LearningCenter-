import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageWhereInput } from './LanguageWhereInput';
import { IsOptional, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { LanguageOrderByInput } from './LanguageOrderByInput';

@ArgsType()
class LanguageFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LanguageWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LanguageWhereInput, { nullable: true })
  @Type(() => LanguageWhereInput)
  where?: LanguageWhereInput;

  @ApiProperty({
    required: false,
    type: [LanguageOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LanguageOrderByInput], { nullable: true })
  @Type(() => LanguageOrderByInput)
  orderBy?: Array<LanguageOrderByInput>;

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

export { LanguageFindManyArgs as LanguageFindManyArgs };
