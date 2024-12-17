import { Validator } from "./Validator";

export class IsUpperThan implements Validator {
  private myref: number | Date;

  constructor(myref: number | Date) {
    this.myref = myref;
  }

  validate(value: any): string[] {
    if (!this.isComparable(value)) {
      return ["The value must be a number or a valid date."];
    }

    if (typeof value === "number" && typeof this.myref === "number") {
      return value > this.myref
        ? []
        : [`The value must be greater than ${this.myref}.`];
    }

    if (value instanceof Date && this.myref instanceof Date) {
      return value.getTime() > this.myref.getTime()
        ? []
        : [`The value must be greater than ${this.myref.toISOString()}.`];
    }

    return ["Reference must be of the same type as the value."];
  }

  private isComparable(value: any): boolean {
    return typeof value === "number" || value instanceof Date;
  }
}



/*const valid = new IsUpperThan(7);
console.log(valid.validate(7));
console.log(valid.validate(5));
console.log(valid.validate(9));
console.log(valid.validate('not nbr'));
console.log(valid.validate('9'));*/

