import { InputType, Field } from '@nestjs/graphql';
import { UserProgressWhereUniqueInput } from '../../userProgress/base/UserProgressWhereUniqueInput';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
class UserProgressCreateNestedManyWithoutUsersInput {
  @Field(() => [UserProgressWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserProgressWhereUniqueInput],
  })
  connect?: Array<UserProgressWhereUniqueInput>;
}

export { UserProgressCreateNestedManyWithoutUsersInput as UserProgressCreateNestedManyWithoutUsersInput };
