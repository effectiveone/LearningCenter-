import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserProgressWhereInput } from './UserProgressWhereInput';
import { ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
class UserProgressListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserProgressWhereInput,
  })
  @ValidateNested()
  @Type(() => UserProgressWhereInput)
  @IsOptional()
  @Field(() => UserProgressWhereInput, {
    nullable: true,
  })
  every?: UserProgressWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserProgressWhereInput,
  })
  @ValidateNested()
  @Type(() => UserProgressWhereInput)
  @IsOptional()
  @Field(() => UserProgressWhereInput, {
    nullable: true,
  })
  some?: UserProgressWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserProgressWhereInput,
  })
  @ValidateNested()
  @Type(() => UserProgressWhereInput)
  @IsOptional()
  @Field(() => UserProgressWhereInput, {
    nullable: true,
  })
  none?: UserProgressWhereInput;
}
export { UserProgressListRelationFilter as UserProgressListRelationFilter };
