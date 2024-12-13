import { MetadataManager } from "./MetadataManager";
import { ValidationError } from "../errors/ValidationError";

export class ValidationManager {
  static validate(obj: any): string[]{
    const errors: string[] = [];
    for (const key of Object.keys(obj)) {
      const rules = MetadataManager.getRules(obj, key);
      for (const rule of rules) {
        errors.push(...rule.validate(obj[key], obj));
      }
    }
    if (errors.length > 0)
      throw new ValidationError(errors);

    return errors;
  }
}