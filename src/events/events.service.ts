import { Injectable, Logger } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaClient) {}

  async create(createEventInput: CreateEventInput) {
    return await this.prisma.event.create({
      data: createEventInput,
    });
  }

  async findAll() {
    const events = await this.prisma.event.findMany({
      include: {
        creator: true,
        location: true,
        artists: true,
      },
    });

    Logger.log('Events found:', events); // Add this
    return events;
  }

  async findOne(id: number) {
    return await this.prisma.event.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateEventInput: UpdateEventInput) {
    return (
      `This action updates a #${id} event` + JSON.stringify(updateEventInput)
    );
  }

  async remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
