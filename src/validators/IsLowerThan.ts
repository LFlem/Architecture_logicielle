import { Validator } from "./Validator";

/**
 * Validator that checks if a value is less than a reference value
 * @implements {Validator}
 */
export class IsLowerThan implements Validator {
  private myref: number | Date;

  /**
   * Creates a new "lower than" validator
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
   * Validates if value is less than reference value
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
      return value < this.myref
        ? []
        : [`The value must be less than ${this.myref}.`];
    }

    if (value instanceof Date && this.myref instanceof Date) {
      return value.getTime() < this.myref.getTime()
        ? []
        : [`The value must be less than ${this.myref.toISOString()}.`];
    }

    return ["Reference must be of the same type as the value."];
  }

  /**
   * Checks if a value can be compared (number or Date)
   * @private
   * @param {any} value - Value to check
   * @returns {boolean} True if value is comparable
   */
  private isComparable(value: any): boolean {
    return typeof value === "number" || value instanceof Date;
  }
}
