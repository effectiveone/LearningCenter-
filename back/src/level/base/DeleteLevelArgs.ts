import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { LevelWhereUniqueInput } from './LevelWhereUniqueInput';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@ArgsType()
class DeleteLevelArgs {
  @ApiProperty({
    required: true,
    type: () => LevelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LevelWhereUniqueInput)
  @Field(() => LevelWhereUniqueInput, { nullable: false })
  where!: LevelWhereUniqueInput;
}

export { DeleteLevelArgs as DeleteLevelArgs };
