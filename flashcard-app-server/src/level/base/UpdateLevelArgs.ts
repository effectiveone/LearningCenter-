import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { LevelWhereUniqueInput } from './LevelWhereUniqueInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { LevelUpdateInput } from './LevelUpdateInput';

@ArgsType()
class UpdateLevelArgs {
  @ApiProperty({
    required: true,
    type: () => LevelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LevelWhereUniqueInput)
  @Field(() => LevelWhereUniqueInput, { nullable: false })
  where!: LevelWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => LevelUpdateInput,
  })
  @ValidateNested()
  @Type(() => LevelUpdateInput)
  @Field(() => LevelUpdateInput, { nullable: false })
  data!: LevelUpdateInput;
}

export { UpdateLevelArgs as UpdateLevelArgs };
