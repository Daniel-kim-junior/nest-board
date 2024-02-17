/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-empty-function */
import { BoardsService } from 'src/boards/interfaces/boards.abstract';

type DefaultMethods = {};

type DefaultBoardsMethods = DefaultMethods & {
  changeInstance: () => void;
};

export type BoardModuleServiceType = DefaultBoardsMethods & BoardsService;

export class BoardsModuleImpl implements DefaultBoardsMethods {
  private constructor() {}

  static getInstance(service: BoardsService): BoardModuleServiceType {
    return BoardsModuleImpl.boardMixin<BoardsService, DefaultBoardsMethods>(
      service,
      new BoardsModuleImpl(),
    );
  }

  changeInstance = () => {};

  private static boardMixin<
    T extends BoardsService,
    U extends DefaultBoardsMethods,
  >(base: T, mixin: U): T & U {
    const mixed = {
      ...base,
      ...mixin,
    } as T & U;

    return mixed;
  }
}
