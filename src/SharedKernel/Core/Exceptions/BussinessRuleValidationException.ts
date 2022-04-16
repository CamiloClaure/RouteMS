import { IBussinessRule } from "../IBussinessRule";

export class BussinessRuleValidationException extends Error {
  BrokenRule: IBussinessRule | undefined;

  Details: string = "";

  constructor(brokenRule?: any) {
    super("");
    if (brokenRule.brokenRule) {
      this.BrokenRule = brokenRule.brokenRule;
      this.Details = brokenRule.brokenRule.Message();
    } else if (brokenRule.message) {
      this.Details = brokenRule.message;
    }
  }

  error(): string {
    return `${typeof this.BrokenRule}: ${this.Details}`;
  }
}
