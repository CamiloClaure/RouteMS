import { AggregateRoot } from "../../../SharedKernel/Core/AggregateRoot";
import { NameValue } from "../../../SharedKernel/ValueObjects/NameValue";
import { v4 as uuidv4 } from "uuid";

class Airport extends AggregateRoot<string> {
  _Name!: NameValue;

  constructor(name: string) {
    super();
    this.id = uuidv4();
    this.Name = name;
  }

  set Name(name: string) {
    this._Name = new NameValue(name);
  }
}
