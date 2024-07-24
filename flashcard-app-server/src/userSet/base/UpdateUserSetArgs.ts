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
import { UserSetWhereUniqueInput } from "./UserSetWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { UserSetUpdateInput } from "./UserSetUpdateInput";

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
