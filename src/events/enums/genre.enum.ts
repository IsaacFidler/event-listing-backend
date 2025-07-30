import { registerEnumType } from '@nestjs/graphql';
import { Genre } from '@prisma/client';

registerEnumType(Genre, {
  name: 'Genre',
  description: 'Music genres for events',
});
