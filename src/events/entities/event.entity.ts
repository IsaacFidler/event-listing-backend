import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Genre } from '@prisma/client';
import '../enums/genre.enum';
import { User } from 'src/users/entities/user.entity';
import { Artist } from 'src/artists/entities/artist.entity';
import { Location } from 'src/locations/entities/location.entity';

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

  // Fix these relationship fields:
  @Field(() => User, { nullable: true })
  creator?: User;

  @Field(() => Location, { nullable: true })
  location?: Location;

  @Field(() => [Artist], { nullable: true })
  artists?: Artist[];
}
