import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageWhereInput } from './LanguageWhereInput';
import { Type } from 'class-transformer';

@ArgsType()
class LanguageCountArgs {
  @ApiProperty({
    required: false,
    type: () => LanguageWhereInput,
  })
  @Field(() => LanguageWhereInput, { nullable: true })
  @Type(() => LanguageWhereInput)
  where?: LanguageWhereInput;
}

export { LanguageCountArgs as LanguageCountArgs };
