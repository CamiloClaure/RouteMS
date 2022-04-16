import {AggregateRoot} from "../../../SharedKernel/Core/AggregateRoot"
import {v4 as uuidv4} from "uuid"
import {DateValue} from "../../../SharedKernel/ValueObjects/DateValue"
import {Destination} from "../Destination/Destination"

export class Flight extends AggregateRoot<string> {
  private _flightDate!: DateValue
  private _departureTime!: DateValue
  private _arrivalTime!: DateValue
  private _destination!: Destination

  constructor() {
    super()
    this.id = uuidv4()
  }

  get flightDate(): DateValue {
    return this._flightDate
  }

  set flightDate(value: DateValue) {
    this._flightDate = value
  }

  get departureTime(): DateValue {
    return this._departureTime
  }

  set departureTime(value: DateValue) {
    this._departureTime = value
  }

  get arrivalTime(): DateValue {
    return this._arrivalTime
  }

  set arrivalTime(value: DateValue) {
    this._arrivalTime = value
  }

  get destination(): Destination {
    return this._destination
  }

  set destination(value: Destination) {
    this._destination = value
  }
}
