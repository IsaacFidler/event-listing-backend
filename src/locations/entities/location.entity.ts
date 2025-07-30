import { Field, Int, ObjectType } from '@nestjs/graphql';

// src/locations/entities/location.entity.ts
@ObjectType()
export class Location {
  @Field(() => Int)
  id: number;

  @Field()
  addressLine1: string;

  @Field({ nullable: true })
  addressLine2?: string;

  @Field()
  city: string;

  @Field({ nullable: true })
  postcode?: string;
}
