import { AggregateRoot } from '../../../SharedKernel/Core/AggregateRoot';
import { v4 as uuidv4 } from 'uuid';
import { DateValue } from '../../../SharedKernel/ValueObjects/DateValue';
import { Route } from '../Route/Route';

export class Flight extends AggregateRoot<string> {
  private _departureDate!: DateValue;
  private _arrivalDate!: DateValue;
  private _route!: Route;

  constructor() {
    super();
    this.id = uuidv4();
  }

  get departureDate(): DateValue {
    return this._departureDate;
  }

  set departureDate(value: DateValue) {
    this._departureDate = value;
  }

  get arrivalDate(): DateValue {
    return this._arrivalDate;
  }

  set arrivalDate(value: DateValue) {
    this._arrivalDate = value;
  }

  get route(): Route {
    return this._route;
  }

  set route(value: Route) {
    this._route = value;
  }
}
