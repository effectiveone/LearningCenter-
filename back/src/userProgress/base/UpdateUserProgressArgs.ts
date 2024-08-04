import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserProgressWhereUniqueInput } from './UserProgressWhereUniqueInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UserProgressUpdateInput } from './UserProgressUpdateInput';

@ArgsType()
class UpdateUserProgressArgs {
  @ApiProperty({
    required: true,
    type: () => UserProgressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserProgressWhereUniqueInput)
  @Field(() => UserProgressWhereUniqueInput, { nullable: false })
  where!: UserProgressWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => UserProgressUpdateInput,
  })
  @ValidateNested()
  @Type(() => UserProgressUpdateInput)
  @Field(() => UserProgressUpdateInput, { nullable: false })
  data!: UserProgressUpdateInput;
}

export { UpdateUserProgressArgs as UpdateUserProgressArgs };
