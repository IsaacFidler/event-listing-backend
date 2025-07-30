import { Injectable } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaClient) {}

  create(createEventInput: CreateEventInput) {
    const event = this.prisma.event.create({
      data: createEventInput,
    });

    return event;
  }

  findAll() {
    return `This action returns all events`;
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventInput: UpdateEventInput) {
    return (
      `This action updates a #${id} event` + JSON.stringify(updateEventInput)
    );
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
