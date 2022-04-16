import {NameValue} from "../../../SharedKernel/ValueObjects/NameValue"
import {v4 as uuidv4} from "uuid"
import {Entity} from "../../../SharedKernel/Core/Entity"

export class JourneyDetail extends Entity<string> {
  private _cityName!: NameValue
  private _airportName!: NameValue
  private _hierarchy!: NameValue // TODO crear otro ValueObject para esto
  private _nextCity!: NameValue
  constructor() {
    super()
    this.id = uuidv4()
  }

  get cityName(): NameValue {
    return this._cityName
  }

  set cityName(value: NameValue) {
    this._cityName = value
  }

  get airportName(): NameValue {
    return this._airportName
  }

  set airportName(value: NameValue) {
    this._airportName = value
  }

  get hierarchy(): NameValue {
    return this._hierarchy
  }

  set hierarchy(value: NameValue) {
    this._hierarchy = value
  }

  get nextCity(): NameValue {
    return this._nextCity
  }

  set nextCity(value: NameValue) {
    this._nextCity = value
  }
}
