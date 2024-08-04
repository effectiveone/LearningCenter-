import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserProgressCreateInput } from './UserProgressCreateInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class CreateUserProgressArgs {
  @ApiProperty({
    required: true,
    type: () => UserProgressCreateInput,
  })
  @ValidateNested()
  @Type(() => UserProgressCreateInput)
  @Field(() => UserProgressCreateInput, { nullable: false })
  data!: UserProgressCreateInput;
}

export { CreateUserProgressArgs as CreateUserProgressArgs };
