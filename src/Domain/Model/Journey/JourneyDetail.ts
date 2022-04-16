import { NameValue } from "../../../SharedKernel/ValueObjects/NameValue";
import { v4 as uuidv4 } from "uuid";
import { Entity } from "../../../SharedKernel/Core/Entity";

export class JourneyDetail extends Entity<string> {
  private _cityName!: NameValue;
  private _airportName!: NameValue;
  private _hierarchy!: NameValue;
  private _nextCity!: NameValue;
  constructor() {
    super();
    this.id = uuidv4();
  }
}
