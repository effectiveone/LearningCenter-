import { ObjectType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Language } from '../../language/base/Language';
import { Category } from '../../category/base/Category';
import { Level } from '../../level/base/Level';
import { UserProgress } from '../../userProgress/base/UserProgress';

@ObjectType()
class Flashcard {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  question!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  answer!: string | null;

  @ApiProperty({
    required: false,
    type: () => Language,
  })
  @ValidateNested()
  @Type(() => Language)
  @IsOptional()
  language?: Language | null;

  @ApiProperty({
    required: false,
    type: () => Category,
  })
  @ValidateNested()
  @Type(() => Category)
  @IsOptional()
  category?: Category | null;

  @ApiProperty({
    required: false,
    type: () => Level,
  })
  @ValidateNested()
  @Type(() => Level)
  @IsOptional()
  level?: Level | null;

  @ApiProperty({
    required: false,
    type: () => [UserProgress],
  })
  @ValidateNested()
  @Type(() => UserProgress)
  @IsOptional()
  userProgresses?: Array<UserProgress>;
}

export { Flashcard as Flashcard };
