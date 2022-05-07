import {Flight} from "../Model/Flight/Flight"
import {DateValue} from "../../SharedKernel/ValueObjects/DateValue"
import {Destination} from "../Model/Destination/Destination"
import {NameValue} from "../../SharedKernel/ValueObjects/NameValue"
export class DestinationBuilder {
  private readonly _destination: Destination

  constructor() {
    this._destination = new Destination()
  }

  setDestinationName(name: string) {
    this._destination.name = new NameValue(name)
    return this
  }

  build(): Destination {
    return this._destination
  }
}
