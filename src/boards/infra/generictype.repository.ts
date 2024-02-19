import { DeepPartial, EntityTarget, FindOneOptions, Repository } from 'typeorm';
import { TransactionManager } from '../util/transaction.manager';
import { BoardsEntity } from '../domain/boards.entity';

type idType = string | number;
export abstract class GenericTypeRepository<T extends BoardsEntity> {
  constructor(private readonly transactionManager: TransactionManager) {}

  abstract getName(): EntityTarget<T>;

  async save(t: DeepPartial<T> | DeepPartial<T>[]): Promise<void> {
    await this.getRepsository().save(Array.isArray(t) ? t : [t]);
  }

  async findById(id: idType): Promise<T | null> {
    const findOptions: FindOneOptions = { where: { id } };
    return this.getRepsository().findOne(findOptions);
  }

  protected getRepsository(): Repository<T> {
    return this.transactionManager
      .getEntityManager()
      .getRepository(this.getName());
  }
}
