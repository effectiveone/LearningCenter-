import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserSetWhereInput } from './UserSetWhereInput';
import { IsOptional, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { UserSetOrderByInput } from './UserSetOrderByInput';

@ArgsType()
class UserSetFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UserSetWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UserSetWhereInput, { nullable: true })
  @Type(() => UserSetWhereInput)
  where?: UserSetWhereInput;

  @ApiProperty({
    required: false,
    type: [UserSetOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UserSetOrderByInput], { nullable: true })
  @Type(() => UserSetOrderByInput)
  orderBy?: Array<UserSetOrderByInput>;

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

export { UserSetFindManyArgs as UserSetFindManyArgs };
