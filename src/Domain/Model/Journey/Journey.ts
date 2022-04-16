import { AggregateRoot } from "../../../SharedKernel/Core/AggregateRoot";
import { NameValue } from "../../../SharedKernel/ValueObjects/NameValue";
import { v4 as uuidv4 } from "uuid";
import { JourneyDetail } from "./JourneyDetail";

export class Journey extends AggregateRoot<string> {
  private _name!: NameValue;
  private _journeyDetail!: JourneyDetail[];
  constructor() {
    super();
    this.id = uuidv4();
  }
}
