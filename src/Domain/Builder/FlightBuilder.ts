import {Flight} from "../Model/Flight/Flight"
import {DateValue} from "../../SharedKernel/ValueObjects/DateValue"
import {Destination} from "../Model/Destination/Destination"
export class FlightBuilder {
  private readonly _flight: Flight

  constructor() {
    this._flight = new Flight()
  }

  setFlightDate(flightDate: Date) {
    this._flight.flightDate = new DateValue(flightDate)
    return this
  }

  setDepartureTime(departureTime: Date) {
    this._flight.departureTime = new DateValue(departureTime)
    return this
  }

  setArrivalTime(arrivalTime: Date) {
    this._flight.arrivalTime = new DateValue(arrivalTime)
    return this
  }

  setDestination(destination: Destination) {
    this._flight.destination = destination
    return this
  }

  build(): Flight {
    return this._flight
  }
}
