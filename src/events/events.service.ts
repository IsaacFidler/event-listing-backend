import { Injectable, Logger } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { PrismaClient, Genre } from '@prisma/client';

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

  async findAllWithFilters(filters: {
    genre?: Genre;
    userId?: number;
    locationId?: number;
  }) {
    const where: any = {};

    if (filters.genre) {
      where.genre = filters.genre;
    }

    if (filters.userId) {
      where.userId = filters.userId;
    }

    if (filters.locationId) {
      where.locationId = filters.locationId;
    }

    return await this.prisma.event.findMany({
      where,
      include: {
        creator: true,
        location: true,
        artists: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.event.findUnique({
      where: {
        id: id,
      },
      include: {
        creator: true,
        location: true,
        artists: true,
      },
    });
  }

  async findAllByGenre(genre: Genre) {
    return await this.prisma.event.findMany({
      where: {
        genre: genre,
      },
      include: {
        creator: true,
        location: true,
        artists: true,
      },
    });
  }

  async findAllByDateRange(startDate: Date, endDate: Date) {
    return await this.prisma.event.findMany({
      where: {
        OR: [
          // Event starts within the range
          {
            startTime: {
              gte: startDate,
              lte: endDate,
            },
          },
          // Event ends within the range
          {
            endTime: {
              gte: startDate,
              lte: endDate,
            },
          },
          // Event spans the entire range
          {
            AND: [
              { startTime: { lte: startDate } },
              { endTime: { gte: endDate } },
            ],
          },
        ],
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
