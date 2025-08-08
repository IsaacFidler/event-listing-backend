import { registerEnumType } from '@nestjs/graphql';
import { RegistrationStatus } from '@prisma/client';

registerEnumType(RegistrationStatus, {
  name: 'RegistrationStatus',
  description: 'Registration status for events',
});
