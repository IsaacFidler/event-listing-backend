import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Event } from 'src/events/entities/event.entity';

@ObjectType()
export class Review {
  @Field(() => Int, { description: 'review id' })
  id: number;

  @Field(() => Int, { description: 'out of ten score for an event' })
  score: number;

  @Field({ description: 'review description' })
  description: string;

  @Field(() => Event, { description: 'review description' })
  event: string;

  @Field(() => User, { description: 'review description' })
  user: string;
}
