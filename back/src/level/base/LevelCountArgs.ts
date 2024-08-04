import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { LevelWhereInput } from './LevelWhereInput';
import { Type } from 'class-transformer';

@ArgsType()
class LevelCountArgs {
  @ApiProperty({
    required: false,
    type: () => LevelWhereInput,
  })
  @Field(() => LevelWhereInput, { nullable: true })
  @Type(() => LevelWhereInput)
  where?: LevelWhereInput;
}

export { LevelCountArgs as LevelCountArgs };
