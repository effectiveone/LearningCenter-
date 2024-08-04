import { InputType, Field } from '@nestjs/graphql';
import { UserProgressWhereUniqueInput } from '../../userProgress/base/UserProgressWhereUniqueInput';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
class UserProgressUpdateManyWithoutUsersInput {
  @Field(() => [UserProgressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserProgressWhereUniqueInput],
  })
  connect?: Array<UserProgressWhereUniqueInput>;

  @Field(() => [UserProgressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserProgressWhereUniqueInput],
  })
  disconnect?: Array<UserProgressWhereUniqueInput>;

  @Field(() => [UserProgressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserProgressWhereUniqueInput],
  })
  set?: Array<UserProgressWhereUniqueInput>;
}

export { UserProgressUpdateManyWithoutUsersInput as UserProgressUpdateManyWithoutUsersInput };
