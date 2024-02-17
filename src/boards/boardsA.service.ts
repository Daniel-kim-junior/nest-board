import { Injectable } from '@nestjs/common';
import { BoardsService } from 'src/boards/interfaces/boards.abstract';

@Injectable()
export class BoardsServiceImpl implements BoardsService {
  some(): string {
    throw new Error('Method not implemented.');
  }
  someMethod(): string {
    return 'A';
  }
}
