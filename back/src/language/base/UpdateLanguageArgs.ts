import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageWhereUniqueInput } from './LanguageWhereUniqueInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { LanguageUpdateInput } from './LanguageUpdateInput';

@ArgsType()
class UpdateLanguageArgs {
  @ApiProperty({
    required: true,
    type: () => LanguageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LanguageWhereUniqueInput)
  @Field(() => LanguageWhereUniqueInput, { nullable: false })
  where!: LanguageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LanguageUpdateInput,
  })
  @ValidateNested()
  @Type(() => LanguageUpdateInput)
  @Field(() => LanguageUpdateInput, { nullable: false })
  data!: LanguageUpdateInput;
}

export { UpdateLanguageArgs as UpdateLanguageArgs };
