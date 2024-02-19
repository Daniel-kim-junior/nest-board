import { createNamespace } from 'cls-hooked';
// import { TransactionExample } from './transactional.spec';
// import { PYC_NAMESPACE } from 'src/boards/util/transaction.middleware';
import { dataSourceMockFactory } from './dsmock.factory';

it('entityManager가 존재하는 경우', async () => {
  // const namespace = createNamespace(PYC_NAMESPACE);
  const datasource = dataSourceMockFactory();
  const runner = datasource.createQueryRunner();
  runner.connect();

  console.log('gg');
});
