import { ArgsType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryWhereInput } from './CategoryWhereInput';
import { IsOptional, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { CategoryOrderByInput } from './CategoryOrderByInput';

@ArgsType()
class CategoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CategoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CategoryWhereInput, { nullable: true })
  @Type(() => CategoryWhereInput)
  where?: CategoryWhereInput;

  @ApiProperty({
    required: false,
    type: [CategoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CategoryOrderByInput], { nullable: true })
  @Type(() => CategoryOrderByInput)
  orderBy?: Array<CategoryOrderByInput>;

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

export { CategoryFindManyArgs as CategoryFindManyArgs };
