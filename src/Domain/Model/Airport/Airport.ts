import {AggregateRoot} from "../../../SharedKernel/Core/AggregateRoot"
import {NameValue} from "../../../SharedKernel/ValueObjects/NameValue"
import {v4 as uuidv4} from "uuid"
import {Flight} from "../Flight/Flight"
import {Destination} from "../Destination/Destination"

export class Airport extends AggregateRoot<string> {
  _Name!: NameValue
  _flights: Flight[] = []
  constructor(name: string) {
    super()
    this.id = uuidv4()
    this.Name = name
  }

  set Name(name: string) {
    this._Name = new NameValue(name)
  }

  getFlightCode(flightDate: Date, destination: Destination) {
    return `${flightDate.getDate().toString()}-${destination.name.getName(destination.name)}`
  }
}
