import { MetadataManager } from "./MetadataManager";
import { ValidationError } from "../errors/ValidationError";

export class ValidationManager {
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
