import {JourneyDetail} from "../Model/Journey/JourneyDetail"
import {NameValue} from "../../SharedKernel/ValueObjects/NameValue"

export class JourneyDetailBuilder {
  private readonly _journeyDetail: JourneyDetail

  constructor() {
    this._journeyDetail = new JourneyDetail()
  }

  setCityName(cityName: string) {
    this._journeyDetail.cityName = new NameValue(cityName)
  }

  setAirportName(airportName: string) {
    this._journeyDetail.airportName = new NameValue(airportName)
  }

  setHierarchy(airportName: string) {
    this._journeyDetail.hierarchy = new NameValue(airportName)
  }

  setNextCity(nextCity: string) {
    this._journeyDetail.nextCity = new NameValue(nextCity)
  }

  build(): JourneyDetail {
    return this._journeyDetail
  }
}
