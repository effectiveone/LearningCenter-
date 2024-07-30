import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { LevelCreateInput } from './LevelCreateInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class CreateLevelArgs {
  @ApiProperty({
    required: true,
    type: () => LevelCreateInput,
  })
  @ValidateNested()
  @Type(() => LevelCreateInput)
  @Field(() => LevelCreateInput, { nullable: false })
  data!: LevelCreateInput;
}

export { CreateLevelArgs as CreateLevelArgs };
