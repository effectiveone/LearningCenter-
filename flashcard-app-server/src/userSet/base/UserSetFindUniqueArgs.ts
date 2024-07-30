import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserSetWhereUniqueInput } from './UserSetWhereUniqueInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class UserSetFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => UserSetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserSetWhereUniqueInput)
  @Field(() => UserSetWhereUniqueInput, { nullable: false })
  where!: UserSetWhereUniqueInput;
}

export { UserSetFindUniqueArgs as UserSetFindUniqueArgs };
