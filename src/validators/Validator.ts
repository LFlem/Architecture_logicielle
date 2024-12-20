/**
 * Interface defining a validator.
 * @interface Validator
 * @example
 * export class IsPositiveValidator implements Validator {
 *   validate(value: any): string[] {
 *     // Logic here
 *   }
 * }
 */
export interface Validator {
  /**
   * Validates a value against defined rules.
   * @param {any} value - The value to validate
   * @param {any} [context] - Optional validation context
   * @returns {string[]} Array of validation error messages
   */
  validate(value: any, context?: any): string[];
}
