import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from 'src/boards/interfaces/boards.abstract';
import { BoardsServiceBImpl } from './boardsB.service';

@Module({
  controllers: [BoardsController],
  providers: [{ provide: BoardsService, useClass: BoardsServiceBImpl }],
})
export class BoardsModule {}
