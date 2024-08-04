import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserSetWhereInput } from './UserSetWhereInput';
import { ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
class UserSetListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserSetWhereInput,
  })
  @ValidateNested()
  @Type(() => UserSetWhereInput)
  @IsOptional()
  @Field(() => UserSetWhereInput, {
    nullable: true,
  })
  every?: UserSetWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserSetWhereInput,
  })
  @ValidateNested()
  @Type(() => UserSetWhereInput)
  @IsOptional()
  @Field(() => UserSetWhereInput, {
    nullable: true,
  })
  some?: UserSetWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserSetWhereInput,
  })
  @ValidateNested()
  @Type(() => UserSetWhereInput)
  @IsOptional()
  @Field(() => UserSetWhereInput, {
    nullable: true,
  })
  none?: UserSetWhereInput;
}
export { UserSetListRelationFilter as UserSetListRelationFilter };
