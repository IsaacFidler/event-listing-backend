import { registerEnumType } from '@nestjs/graphql';

registerEnumType(RegistrationStatus, {
  name: 'RegistrationStatus',
  description: 'Registration status for events',
});
