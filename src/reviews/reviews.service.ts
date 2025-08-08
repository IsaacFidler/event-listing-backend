import { Injectable } from '@nestjs/common';
// import { CreateReviewInput } from './dto/create-review.input';
// import { UpdateReviewInput } from './dto/update-review.input';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ReviewsService {
  // Dependency injection.
  constructor(private prisma: PrismaClient) {}
  // create(createReviewInput: CreateReviewInput) {
  //   return 'This action adds a new review';
  // }

  findAll() {
    return `This action returns all reviews`;
  }

  async findOne(id: number) {
    return await this.prisma.review.findUnique({
      where: {
        id,
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
