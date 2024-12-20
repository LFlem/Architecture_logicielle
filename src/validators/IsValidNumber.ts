
import { Validator } from "./Validator";
/**
 * Validator to check if a value is a valid number.
 * Implements the {@link Validator} interface
 */
export class IsValidNumber implements Validator {
  /**
   * Validates if the given value is a valid number.
   * @param {any} value - The value to validate
   * @param {Object} [context] - Validation context
   * @param {string} [context.propertyName] - Name of the property being validated
   * @returns {string[]} Array of validation error messages
   */
  validate(value: any, context?: any): string[] {
    if (value === undefined || value === null) {
      return [`The property '${context?.propertyName}' must be defined.`];
    }
    if (typeof value !== "number" || isNaN(value)) {
      return [
        `The property '${context?.propertyName}' must be a valid number.`,
      ];
    }
    return [];
  }
}

