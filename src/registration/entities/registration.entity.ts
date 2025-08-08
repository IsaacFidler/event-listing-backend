import { ObjectType, Field, Int } from '@nestjs/graphql';
import { RegistrationStatus } from '@prisma/client';
import { User } from 'src/users/entities/user.entity';
import { Event } from 'src/events/entities/event.entity';
import '../../events/enums/registrationStatus.enum';
@ObjectType()
export class Registration {
  @Field(() => Int)
  id: number;

  @Field(() => RegistrationStatus)
  status: RegistrationStatus;

  @Field(() => User)
  user: User;

  @Field(() => Event)
  event: Event;
}
