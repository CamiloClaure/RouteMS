import { IQueryResponse } from './IQueryResponse';

export default interface IQuery {
  execute: () => Promise<IQueryResponse>;
}
