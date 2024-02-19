import { NestMiddleware } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { getNamespace, createNamespace } from 'cls-hooked';
export const PYC_NAMESPACE = 'PYC_NAMESPACE';
export const PYC_ENTITY_MANAGER = 'PYC_ENTITY_MANAGER';

export class TransactionMiddleware implements NestMiddleware {
  constructor(private readonly em: EntityManager) {}

  use(req: any, res: any, next: () => void) {
    const namespace =
      getNamespace(PYC_NAMESPACE) ?? createNamespace(PYC_NAMESPACE);
    return namespace.runAndReturn(async () => {
      Promise.resolve()
        .then(() => this.setEntityManager())
        .then(next);
    });
  }

  private setEntityManager() {
    const namespace = getNamespace(PYC_NAMESPACE)!;
    namespace.set<string>(PYC_ENTITY_MANAGER, this.em);
  }
}
