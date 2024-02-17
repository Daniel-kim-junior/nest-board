import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { EntityManager } from 'typeorm';
import { TransactionManager } from './transaction.manager';

@Module({
  imports: [BoardsModule, EntityManager, TransactionManager],
})
export class AppModule {}
