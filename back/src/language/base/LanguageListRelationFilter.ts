import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageWhereInput } from './LanguageWhereInput';
import { ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
class LanguageListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LanguageWhereInput,
  })
  @ValidateNested()
  @Type(() => LanguageWhereInput)
  @IsOptional()
  @Field(() => LanguageWhereInput, {
    nullable: true,
  })
  every?: LanguageWhereInput;

  @ApiProperty({
    required: false,
    type: () => LanguageWhereInput,
  })
  @ValidateNested()
  @Type(() => LanguageWhereInput)
  @IsOptional()
  @Field(() => LanguageWhereInput, {
    nullable: true,
  })
  some?: LanguageWhereInput;

  @ApiProperty({
    required: false,
    type: () => LanguageWhereInput,
  })
  @ValidateNested()
  @Type(() => LanguageWhereInput)
  @IsOptional()
  @Field(() => LanguageWhereInput, {
    nullable: true,
  })
  none?: LanguageWhereInput;
}
export { LanguageListRelationFilter as LanguageListRelationFilter };
