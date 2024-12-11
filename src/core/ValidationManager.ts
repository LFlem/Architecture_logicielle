import { MetadataManager } from "./MetadataManager";

export class ValidationManager {
  static validate(obj: any): string[]{
    const errors: string[] = [];
    for (const key of Object.keys(obj)) {
      const rules = MetadataManager.getRules(obj, key);
      for (const rule of rules) {
        errors.push(...rule.validate(obj[key], obj));
      }
    }
    return errors;
  }
}