import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserProgressWhereUniqueInput } from './UserProgressWhereUniqueInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class UserProgressFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => UserProgressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserProgressWhereUniqueInput)
  @Field(() => UserProgressWhereUniqueInput, { nullable: false })
  where!: UserProgressWhereUniqueInput;
}

export { UserProgressFindUniqueArgs as UserProgressFindUniqueArgs };
