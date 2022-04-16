import { ValueObject } from "../Core/ValueObject";
import { BussinessRuleValidationException } from "../Core/Exceptions/BussinessRuleValidationException";
import { StringNotNullOrEmptyRule } from "../Rules/StringNotNullOrEmptyRule";

export class NameValue extends ValueObject {
  Name: string | undefined;

  constructor(name: string) {
    super();
    this.CheckRule(new StringNotNullOrEmptyRule(name));
    if (name.length > 500) {
      throw new BussinessRuleValidationException({
        message: "PersonName can't be more than 500 characters",
      });
    }
    this.Name = name;
  }

  getName(value: NameValue) {
    return value.Name;
  }

  // static implicit operator PersonNameValue(string name)
  //    {
  //        return new PersonNameValue(name);
  //    }
}
