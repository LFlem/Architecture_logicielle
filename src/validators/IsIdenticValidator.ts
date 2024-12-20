/**
 * Validator that checks if a value matches another field's value
 * @implements {Validator}
 */
import { Validator } from "./Validator";

export class IsIdenticValidator implements Validator {
  private myfield: string;
  /**
   * Creates a new identical value validator
   * @param {string} myfield - Name of the field to compare against
   */

  constructor(myfield: string) {
    this.myfield = myfield;
  }

  /**
   * Validates if the value matches the reference field
   * @param {any} value - Value to validate
   * @param {Object} context - Validation context containing reference field
   * @returns {string[]} Array of validation error messages
   */
  validate(value: any, context?: any): string[] {
    if (!context || !context[this.myfield])
      return ["The field is missing in the context."];
    if (value !== context[this.myfield])
      return [`The value must match of the field ${this.myfield}.`];
    return [];
  }
}
