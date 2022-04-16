import {IBussinessRule} from "../Core/IBussinessRule"

export class NotNullRule implements IBussinessRule {
  private _value: object | undefined

  NotNullRule(value: object) {
    this._value = value
  }

  Message(): string {
    return "Object cannot be null"
  }

  IsValid(): boolean {
    return this._value != null
  }
}
