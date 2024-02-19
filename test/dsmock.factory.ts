import { DataSource } from 'typeorm';
export type MockType<T> = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [P in keyof T]?: jest.Mock;
};

export const dataSourceMockFactory: () => MockType<DataSource> = jest.fn(
  () => ({
    createQueryRunner: jest.fn().mockImplementation(() => ({
      connect: jest.fn(),
      startTransaction: jest.fn(),
      release: jest.fn(),
      rollbackTransaction: jest.fn(),
      manager: {
        save: jest.fn(),
      },
    })),
  }),
);
