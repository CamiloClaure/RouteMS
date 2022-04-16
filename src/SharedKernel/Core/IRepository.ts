import {AggregateRoot} from "./AggregateRoot"

export interface IRepository<T, TId> extends AggregateRoot<TId> {
  FindByIdAsync(id: TId): Promise<any>

  CreateAsync(obj: T): Promise<any>
}
