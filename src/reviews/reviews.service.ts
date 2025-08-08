import { Injectable } from '@nestjs/common';
// import { CreateReviewInput } from './dto/create-review.input';
// import { UpdateReviewInput } from './dto/update-review.input';
import { PrismaClient } from '@prisma/client';
import { CreateReviewInput } from './dto/create-review.input';

@Injectable()
export class ReviewsService {
  // Dependency injection.
  constructor(private prisma: PrismaClient) {}
  async create(createReviewInput: CreateReviewInput) {
    return await this.prisma.review.create({
      data: createReviewInput,
    });
  }

  findAll() {
    return `This action returns all reviews`;
  }

  async findOne(id: number) {
    return await this.prisma.review.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        event: true,
      },
    });
  }

  // update(id: number, updateReviewInput: UpdateReviewInput) {
  //   return `This action updates a #${id} review`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} review`;
  // }
}
