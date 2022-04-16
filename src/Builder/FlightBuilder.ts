import { Flight } from "../Domain/Model/Flight/Flight";
import { NameValue } from "../SharedKernel/ValueObjects/NameValue";
import { DateValue } from "../SharedKernel/ValueObjects/DateValue";
export class FlightBuilder {
  private readonly _flight: Flight;

  constructor() {
    this._flight = new Flight();
  }

  setFlightDate(flightDate: Date) {
    this._flight.flightDate = new DateValue(flightDate);
  }

  setDepartureTime(departureTime: Date) {
    this._flight.departureTime = new DateValue(departureTime);
  }

  setArrivalTime(arrivalTime: Date) {
    this._flight.arrivalTime = new DateValue(arrivalTime);
  }

  setDestination(destination: string) {
    this._flight.destination = destination;
  }

  build(): Flight {
    return this._flight;
  }
}
