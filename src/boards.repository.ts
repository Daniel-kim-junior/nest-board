import { EntityTarget, Repository } from 'typeorm';
import { TransactionManager } from './transaction.manager';
import { BoardsEntity } from './boards/boards.entity';

export abstract class BoardRepository<T extends BoardsEntity> {
  constructor(private readonly transactionManager: TransactionManager) {}

  abstract getName(): EntityTarget<T>;
  protected getRepsository(): Repository<T> {
    return this.transactionManager
      .getEntityManager()
      .getRepository(this.getName());
  }
}
