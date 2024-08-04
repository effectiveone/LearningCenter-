import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserSetWhereInput } from './UserSetWhereInput';
import { Type } from 'class-transformer';

@ArgsType()
class UserSetCountArgs {
  @ApiProperty({
    required: false,
    type: () => UserSetWhereInput,
  })
  @Field(() => UserSetWhereInput, { nullable: true })
  @Type(() => UserSetWhereInput)
  where?: UserSetWhereInput;
}

export { UserSetCountArgs as UserSetCountArgs };
