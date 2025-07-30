import { InputType, Field, Int } from '@nestjs/graphql';
import { Genre } from '@prisma/client';

@InputType()
export class CreateEventInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  startTime: Date;

  @Field()
  endTime: Date;

  @Field()
  genre?: Genre;

  @Field(() => Int, { nullable: true })
  userId: number;

  @Field(() => Int, { nullable: true })
  locationId?: number;

  @Field(() => [Int], { nullable: true })
  artistIds?: number[];
}
