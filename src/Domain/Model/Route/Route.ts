import { AggregateRoot } from '../../../SharedKernel/Core/AggregateRoot';
import { v4 as uuidv4 } from 'uuid';
import { NameValue } from '../../../SharedKernel/ValueObjects/NameValue';

export class Route extends AggregateRoot<string> {
  private _name!: NameValue;
  constructor(id?: string) {
    super();
    this.id = id ? id : uuidv4();
  }
  get name(): NameValue {
    return this._name;
  }

  set name(value: NameValue) {
    this._name = value;
  }
}
