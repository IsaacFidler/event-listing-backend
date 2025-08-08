import { Injectable } from '@nestjs/common';
import { CreateRegistrationInput } from './dto/create-registration.input';
import { UpdateRegistrationInput } from './dto/update-registration.input';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RegistrationService {
  constructor(private prisma: PrismaClient) {}

  create(createRegistrationInput: CreateRegistrationInput) {
    return this.prisma.registration.create({
      data: createRegistrationInput,
    });
  }

  findAll() {
    return this.prisma.registration.findMany({
      include: {
        user: true,
        event: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.registration.findUnique({
      where: { id },
      include: {
        user: true,
        event: true,
      },
    });
  }

  update(id: number, updateRegistrationInput: UpdateRegistrationInput) {
    return this.prisma.registration.update({
      where: { id },
      data: updateRegistrationInput,
    });
  }

  remove(id: number) {
    return this.prisma.registration.delete({
      where: { id },
    });
  }
}
