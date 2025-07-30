import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { SharedConfigModule } from './shared/config/config.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { LocationsModule } from './locations/locations.module';
import { ArtistsModule } from './artists/artists.module';

@Module({
  imports: [
    SharedConfigModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PrismaModule,
    UsersModule,
    EventsModule,
    LocationsModule,
    ArtistsModule,
  ],
})
export class AppModule {}
