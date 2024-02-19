import { Module } from '@nestjs/common';
import { BoardsController } from '../application/boards.controller';
import { BoardsService } from 'src/boards/interfaces/boards.abstract';
import { BoardsServiceBImpl } from '../domain/boardsB.service';

@Module({
  controllers: [BoardsController],
  providers: [{ provide: BoardsService, useClass: BoardsServiceBImpl }],
})
export class BoardsModule {}
