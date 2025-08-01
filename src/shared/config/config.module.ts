import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

@Module({
  imports: [NestConfigModule.forRoot({ isGlobal: true })],
  exports: [NestConfigModule],
})
export class SharedConfigModule {}
