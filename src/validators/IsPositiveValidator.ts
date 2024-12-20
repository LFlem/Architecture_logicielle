import { Validator } from "./Validator";

/**
 * Validator to check if a number is positive.
 * @implements {Validator}
 */
export class IsPositiveValidator implements Validator {
  /**
   * Validates if a value is a positive number.
   * @param {any} value - Value to validate
   * @param {any} [context] - Validation context
   * @returns {string[]} Array of validation error messages
   */
  validate(value: any, context?: any): string[] {
    if (typeof value !== "number") {
      return ["The value must be a number."];
    }
    if (value < 0) {
      return ["The value must be positive."];
    }
    return [];
  }
}
