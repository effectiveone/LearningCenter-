/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserProgressWhereUniqueInput } from "../../userProgress/base/UserProgressWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserProgressUpdateManyWithoutFlashcardsInput {
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

export { UserProgressUpdateManyWithoutFlashcardsInput as UserProgressUpdateManyWithoutFlashcardsInput };
