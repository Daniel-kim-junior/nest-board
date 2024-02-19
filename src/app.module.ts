import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/util/boards.module';
import { EntityManager } from 'typeorm';
import { TransactionManager } from './boards/util/transaction.manager';
import { typeOrmConfig } from './boards/util/db.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BoardsModule,
    EntityManager,
    TransactionManager,
  ],
})
export class AppModule {}
