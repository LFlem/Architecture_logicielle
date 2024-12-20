import { Validator } from "./Validator";

/**
 * Validator to check if a value is required (not null/undefined/empty).
 * @implements {Validator}
 */
export class IsRequiredValidator implements Validator {
  /**
   * Validates if a value is not null, undefined or empty.
   * @param {any} value - Value to validate
   * @param {Object} [context] - Validation context
   * @param {string} [context.propertyName] - Name of property being validated
   * @returns {string[]} Array of validation error messages
   */
  validate(value: any, context?: { propertyName: string }): string[] {
    if (value === null || value === undefined || value === "") {
      return [
        `The property '${context?.propertyName}' is required but is null, undefined, or empty.`,
      ];
    }
    return [];
  }
}
