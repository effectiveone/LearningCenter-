/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserProgressWhereUniqueInput } from "./UserProgressWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserProgressUpdateInput } from "./UserProgressUpdateInput";

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