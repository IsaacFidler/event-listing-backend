// In events.module.ts
import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsResolver } from './events.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Import the module, not the service
  providers: [EventsResolver, EventsService],
})
export class EventsModule {}
