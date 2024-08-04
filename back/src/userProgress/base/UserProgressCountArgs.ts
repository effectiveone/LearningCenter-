import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserProgressWhereInput } from './UserProgressWhereInput';
import { Type } from 'class-transformer';

@ArgsType()
class UserProgressCountArgs {
  @ApiProperty({
    required: false,
    type: () => UserProgressWhereInput,
  })
  @Field(() => UserProgressWhereInput, { nullable: true })
  @Type(() => UserProgressWhereInput)
  where?: UserProgressWhereInput;
}

export { UserProgressCountArgs as UserProgressCountArgs };
