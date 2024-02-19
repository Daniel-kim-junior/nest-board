import { EntityTarget, Repository } from 'typeorm';
import { TransactionManager } from '../util/transaction.manager';
import { BoardsEntity } from '../domain/boards.entity';

export abstract class BoardsRepository<T extends BoardsEntity> {
  constructor(private readonly transactionManager: TransactionManager) {}

  abstract getName(): EntityTarget<T>;
  protected getRepsository(): Repository<T> {
    return this.transactionManager
      .getEntityManager()
      .getRepository(this.getName());
  }
}
