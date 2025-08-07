import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventsService } from './events.service';
import { Event } from './entities/event.entity';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { Genre } from '@prisma/client';

@Resolver(() => Event)
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  // create single event
  @Mutation(() => Event)
  createEvent(@Args('createEventInput') createEventInput: CreateEventInput) {
    return this.eventsService.create(createEventInput);
  }
  // query all events

  @Query(() => [Event], { name: 'events' })
  async findAll() {
    return this.eventsService.findAll();
  }

  // query single event
  @Query(() => Event, { name: 'event' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.eventsService.findOne(id);
  }

  @Query(() => [Event], { name: 'eventsByGenre' })
  async findAllByGenre(@Args('genre', { type: () => Genre }) genre: Genre) {
    return this.eventsService.findAllByGenre(genre);
  }

  // update single event
  @Mutation(() => Event)
  updateEvent(@Args('updateEventInput') updateEventInput: UpdateEventInput) {
    return this.eventsService.update(updateEventInput.id, updateEventInput);
  }

  // remove single event

  @Mutation(() => Event)
  removeEvent(@Args('id', { type: () => Int }) id: number) {
    return this.eventsService.remove(id);
  }
}
