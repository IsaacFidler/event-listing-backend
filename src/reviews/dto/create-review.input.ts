import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateReviewInput {
  @Field(() => Int, { description: 'Score for event rating' })
  score: number;

  @Field()
  description: string;

  @Field(() => Int, { description: 'Id of the user leaving the review' })
  userId: number;

  @Field(() => Int, { description: 'Id of the event the review is for' })
  eventId: number;
}
