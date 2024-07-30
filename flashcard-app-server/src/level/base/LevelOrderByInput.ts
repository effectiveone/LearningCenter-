import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';
import { SortOrder } from '../../util/SortOrder';

@InputType({
  isAbstract: true,
  description: undefined,
})
class LevelOrderByInput {
  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;

  @ApiProperty({
    required: false,
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsEnum(SortOrder)
  @Field(() => SortOrder, {
    nullable: true,
  })
  name?: SortOrder;
}

export { LevelOrderByInput as LevelOrderByInput };
