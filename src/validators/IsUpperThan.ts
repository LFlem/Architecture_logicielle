import { Validator } from "./Validator";

/**
 * Validator to check if a value is greater than a reference value.
 * @implements {Validator}
 */
export class IsUpperThan implements Validator {
  private myref: number | Date;

  /**
   * Creates a new IsUpperThan validator.
   * @param {number|Date} myref - Reference value to compare against
   * @throws {Error} If reference value is null or undefined
   */
  constructor(myref: number | Date) {
    if (!myref) {
      throw new Error("Reference value cannot be null or undefined.");
    }
    this.myref = myref;
  }

  /**
   * Validates if value is greater than the reference value.
   * @param {any} value - Value to validate
   * @returns {string[]} Array of validation error messages
   */
  validate(value: any): string[] {
    if (value === null || value === undefined) {
      return value === null
        ? ["The value cannot be null or undefined."]
        : ["The reference cannot be null or undefined."];
    }

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

  /**
   * Checks if a value can be compared.
   * @private
   * @param {any} value - Value to check
   * @returns {boolean} Whether the value is comparable
   */
  private isComparable(value: any): boolean {
    return typeof value === "number" || value instanceof Date;
  }
}
