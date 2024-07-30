import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageWhereUniqueInput } from './LanguageWhereUniqueInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class LanguageFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => LanguageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LanguageWhereUniqueInput)
  @Field(() => LanguageWhereUniqueInput, { nullable: false })
  where!: LanguageWhereUniqueInput;
}

export { LanguageFindUniqueArgs as LanguageFindUniqueArgs };
