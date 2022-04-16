import {AggregateRoot} from "../../../SharedKernel/Core/AggregateRoot"
import {v4 as uuidv4} from "uuid"
import {DateValue} from "../../../SharedKernel/ValueObjects/DateValue"
import {NameValue} from "../../../SharedKernel/ValueObjects/NameValue"
import {Journey} from "../Journey/Journey"

export class Destination extends AggregateRoot<string> {
  private _name!: NameValue
  private _journeyList!: Journey[]
  constructor() {
    super()
    this.id = uuidv4()
  }
  get name(): NameValue {
    return this._name
  }

  set name(value: NameValue) {
    this._name = value
  }

  get journeyList(): Journey[] {
    return this._journeyList
  }

  set journeyList(value: Journey[]) {
    this._journeyList = value
  }
}
