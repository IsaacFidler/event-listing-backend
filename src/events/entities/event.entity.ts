import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Genre } from '@prisma/client';

@ObjectType()
export class Event {
  @Field(() => Int)
  id: number;

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

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
