import { Field, Int, ObjectType } from '@nestjs/graphql';

// src/artists/entities/artist.entity.ts
@ObjectType()
export class Artist {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  artistName: string;

  @Field({ nullable: true })
  bio?: string;
}
