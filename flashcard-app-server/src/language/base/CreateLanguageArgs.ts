import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { LanguageCreateInput } from './LanguageCreateInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class CreateLanguageArgs {
  @ApiProperty({
    required: true,
    type: () => LanguageCreateInput,
  })
  @ValidateNested()
  @Type(() => LanguageCreateInput)
  @Field(() => LanguageCreateInput, { nullable: false })
  data!: LanguageCreateInput;
}

export { CreateLanguageArgs as CreateLanguageArgs };
