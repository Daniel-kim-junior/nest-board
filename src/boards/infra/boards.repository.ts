import { EntityTarget } from 'typeorm';
import { GenericTypeRepository } from './generictype.repository';
import { BoardsEntity } from '../domain/boards.entity';

export class Repository extends GenericTypeRepository<BoardsEntity> {
  getName(): EntityTarget<BoardsEntity> {
    return BoardsEntity.name;
  }
}
