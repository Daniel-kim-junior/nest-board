import { getNamespace } from 'cls-hooked';
import { EntityManager } from 'typeorm';
import { PYC_ENTITY_MANAGER, PYC_NAMESPACE } from './transaction.middleware';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class TransactionManager {
  getEntityManager(): EntityManager {
    const namespace = getNamespace(PYC_NAMESPACE);
    if (!namespace || !namespace.active)
      throw new InternalServerErrorException(`${PYC_NAMESPACE} is not active`);
    return namespace.get(PYC_ENTITY_MANAGER);
  }
}
