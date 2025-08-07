import { InputType, Field, Int } from '@nestjs/graphql';
import { Genre } from '@prisma/client';
import '../enums/genre.enum';
@InputType()
export class CreateEventInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field(() => Date)
  startTime: Date;

  @Field(() => Date)
  endTime: Date;

  @Field(() => Genre)
  genre: Genre;

  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  locationId: number;

  @Field(() => Int, { nullable: true })
  capacity?: number;

  @Field(() => [Int], { nullable: true })
  artistIds?: number[];
}
