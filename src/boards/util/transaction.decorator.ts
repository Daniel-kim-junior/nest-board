import { getNamespace } from 'cls-hooked';
import { PYC_ENTITY_MANAGER, PYC_NAMESPACE } from './transaction.middleware';
import { InternalServerErrorException } from '@nestjs/common';
import { EntityManager } from 'typeorm';

export function Transactional() {
  return function (
    _target: unknown,
    _property: string | symbol,
    descriptor: TypedPropertyDescriptor<any>,
  ) {
    const targetMethod = descriptor.value;
    async function transactionWrapper(...params: unknown[]) {
      const namespace = getNamespace(PYC_NAMESPACE);
      if (!namespace || !namespace.active)
        throw new InternalServerErrorException(
          `${PYC_NAMESPACE} is not active`,
        );
      const em = namespace.get(PYC_ENTITY_MANAGER) as EntityManager;
      if (!em)
        throw new InternalServerErrorException(
          `Could not find EntityManager in ${PYC_NAMESPACE} nameSpace`,
        );
      return await em.transaction(async (tx: EntityManager) => {
        namespace.set<string>(PYC_ENTITY_MANAGER, tx);
        return await targetMethod.apply(this, params);
      });
    }
    descriptor.value = transactionWrapper;
  };
}
