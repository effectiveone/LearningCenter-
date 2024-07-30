import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserSetCreateInput } from './UserSetCreateInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class CreateUserSetArgs {
  @ApiProperty({
    required: true,
    type: () => UserSetCreateInput,
  })
  @ValidateNested()
  @Type(() => UserSetCreateInput)
  @Field(() => UserSetCreateInput, { nullable: false })
  data!: UserSetCreateInput;
}

export { CreateUserSetArgs as CreateUserSetArgs };
