import {Flight} from "../Model/Flight/Flight"
import {DateValue} from "../../SharedKernel/ValueObjects/DateValue"
import {Route} from "../Model/Route/Route"
export class FlightBuilder {
  private readonly _flight: Flight

  constructor() {
    this._flight = new Flight()
  }


  setDepartureDate(departureTime: Date) {
    this._flight.departureDate = new DateValue(departureTime)
    return this
  }

  setArrivalDate(arrivalTime: Date) {
    this._flight.arrivalDate = new DateValue(arrivalTime)
    return this
  }

  setRoute(route: Route) {
    this._flight.route = route
    return this
  }

  build(): Flight {
    return this._flight
  }
}
