import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserProgressWhereInput } from './UserProgressWhereInput';
import { IsOptional, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { UserProgressOrderByInput } from './UserProgressOrderByInput';

@ArgsType()
class UserProgressFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserProgressWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserProgressWhereInput, { nullable: true })
  @Type(() => UserProgressWhereInput)
  where?: UserProgressWhereInput;

  @ApiProperty({
    required: false,
    type: [UserProgressOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserProgressOrderByInput], { nullable: true })
  @Type(() => UserProgressOrderByInput)
  orderBy?: Array<UserProgressOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UserProgressFindManyArgs as UserProgressFindManyArgs };
