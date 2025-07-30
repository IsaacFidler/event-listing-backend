import { Injectable } from '@nestjs/common';
import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  async create(data: CreateUserInput) {
    return data;
  }
  // async create(data: CreateUserInput): Promise<PrismaUser> {
  //   return data;
  // }

  async findAll(): Promise<PrismaUser[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<PrismaUser | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateUserInput): Promise<PrismaUser> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: number): Promise<PrismaUser> {
    return this.prisma.user.delete({ where: { id } });
  }
}
