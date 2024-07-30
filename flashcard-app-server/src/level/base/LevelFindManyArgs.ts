import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { LevelWhereInput } from './LevelWhereInput';
import { IsOptional, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { LevelOrderByInput } from './LevelOrderByInput';

@ArgsType()
class LevelFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LevelWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LevelWhereInput, { nullable: true })
  @Type(() => LevelWhereInput)
  where?: LevelWhereInput;

  @ApiProperty({
    required: false,
    type: [LevelOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LevelOrderByInput], { nullable: true })
  @Type(() => LevelOrderByInput)
  orderBy?: Array<LevelOrderByInput>;

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

export { LevelFindManyArgs as LevelFindManyArgs };
