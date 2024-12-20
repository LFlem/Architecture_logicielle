import { Validator } from "./Validator";
export class IsValidNumber implements Validator {
  validate(value: any, context?: any): string[] {
    if (value === undefined || value === null) {
      return [`The property '${context?.propertyName}' must be defined.`];
    }
    if (typeof value !== 'number' || isNaN(value)) {
      return [`The property '${context?.propertyName}' must be a valid number.`];
    }
    return [];
  }
}
