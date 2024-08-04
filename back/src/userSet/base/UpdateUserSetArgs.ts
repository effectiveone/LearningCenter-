import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserSetWhereUniqueInput } from './UserSetWhereUniqueInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UserSetUpdateInput } from './UserSetUpdateInput';

@ArgsType()
class UpdateUserSetArgs {
  @ApiProperty({
    required: true,
    type: () => UserSetWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserSetWhereUniqueInput)
  @Field(() => UserSetWhereUniqueInput, { nullable: false })
  where!: UserSetWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserSetUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserSetUpdateInput)
  @Field(() => UserSetUpdateInput, { nullable: false })
  data!: UserSetUpdateInput;
}

export { UpdateUserSetArgs as UpdateUserSetArgs };
