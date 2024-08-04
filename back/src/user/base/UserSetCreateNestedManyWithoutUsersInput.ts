import { InputType, Field } from '@nestjs/graphql';
import { UserSetWhereUniqueInput } from '../../userSet/base/UserSetWhereUniqueInput';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
class UserSetCreateNestedManyWithoutUsersInput {
  @Field(() => [UserSetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserSetWhereUniqueInput],
  })
  connect?: Array<UserSetWhereUniqueInput>;
}

export { UserSetCreateNestedManyWithoutUsersInput as UserSetCreateNestedManyWithoutUsersInput };
