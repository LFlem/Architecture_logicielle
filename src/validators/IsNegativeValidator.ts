import { Validator } from "./Validator";

/**
 * Validator that checks if a number is negative
 * @implements {Validator}
 */
export class IsNegativeValidator implements Validator {
  /**
   * Validates if a value is a negative number
   * @param {any} value - Value to validate
   * @param {any} [context] - Validation context (unused)
   * @returns {string[]} Array of validation error messages
   */

  validate(value: any, context?: any): string[] {
    if (typeof value !== "number") {
      return ["The value must be a number."];
    }
    if (value >= 0) {
      return ["The value must be negative."];
    }
    return [];
  }
}
