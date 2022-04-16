import { ValueObject } from "../Core/ValueObject";

export class DateValue extends ValueObject {
  date: Date | undefined;

  constructor(date: Date) {
    super();
    // TODO add rule validation

    this.date = date;
  }

  getDate(value: DateValue) {
    return value.date;
  }
}
