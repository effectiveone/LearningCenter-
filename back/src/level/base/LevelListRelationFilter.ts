import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { LevelWhereInput } from './LevelWhereInput';
import { ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
class LevelListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LevelWhereInput,
  })
  @ValidateNested()
  @Type(() => LevelWhereInput)
  @IsOptional()
  @Field(() => LevelWhereInput, {
    nullable: true,
  })
  every?: LevelWhereInput;

  @ApiProperty({
    required: false,
    type: () => LevelWhereInput,
  })
  @ValidateNested()
  @Type(() => LevelWhereInput)
  @IsOptional()
  @Field(() => LevelWhereInput, {
    nullable: true,
  })
  some?: LevelWhereInput;

  @ApiProperty({
    required: false,
    type: () => LevelWhereInput,
  })
  @ValidateNested()
  @Type(() => LevelWhereInput)
  @IsOptional()
  @Field(() => LevelWhereInput, {
    nullable: true,
  })
  none?: LevelWhereInput;
}
export { LevelListRelationFilter as LevelListRelationFilter };
