import { InputType, Field, Int } from '@nestjs/graphql';
import { RegistrationStatus } from '@prisma/client';
import '../../events/enums/registrationStatus.enum';

@InputType()
export class CreateRegistrationInput {
  @Field(() => Int)
  eventId: number;

  @Field(() => Int)
  userId: number;

  @Field(() => RegistrationStatus)
  status: RegistrationStatus;
}
