import { MetadataManager } from "./MetadataManager";
import { ValidationError } from "../errors/ValidationError";

/**
 * Manages validation of objects using registered validators.
 */
export class ValidationManager {
  /**
   * Validates an object using registered validation rules.
   * @param {any} obj - Object to validate
   * @returns {string[]} Array of validation error messages
   * @throws {ValidationError} If validation fails
   * @throws {Error} If invalid object provided
   */
  static validate(obj: any): string[] {
    if (!obj || typeof obj !== 'object') {
      throw new Error('Invalid object provided for validation');
    }

    const errors: string[] = [];
    const properties = Object.getOwnPropertyNames(obj);

    for (const key of properties) {
      const rules = MetadataManager.getRules(obj, key);
      const value = obj[key];

      for (const rule of rules) {
        const validationErrors = rule.validate(value, { 
          propertyName: key, 
          object: obj 
        });
        errors.push(...validationErrors);
      }
    }

    if (errors.length > 0) {
      throw new ValidationError(errors);
    }

    return errors;
  }
}
