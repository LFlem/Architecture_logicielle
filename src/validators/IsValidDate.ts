
/**
 * Validator to check if a value is a valid Date object.
 * @implements {Validator}
*/
import { Validator } from "./Validator";
export class IsValidDate implements Validator {
  /**
   * Validates if the given value is a valid Date object.
   * @param {any} value - The value to validate
   * @param {any} [context] - Validation context
   * @returns {string[]} Array of validation error messages
   */
  validate(value: any, context?: any): string[] {
    const errors: string[] = [];
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      errors.push("The value must be a valid date.");
    }
    return errors;
  }
}
