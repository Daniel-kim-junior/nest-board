import { Controller, Get } from '@nestjs/common';
import { BoardsService } from 'src/boards/interfaces/boards.abstract';
import {
  BoardModuleServiceType,
  BoardsModuleImpl,
} from '../interfaces/boards.interface';

@Controller('boards')
export class BoardsController {
  #boardsService: BoardModuleServiceType;

  constructor(private readonly boardsService: BoardsService) {
    this.#boardsService = BoardsModuleImpl.getInstance(boardsService);
  }

  @Get()
  getHi(): void {
    this.#boardsService.changeInstance();
  }
}
