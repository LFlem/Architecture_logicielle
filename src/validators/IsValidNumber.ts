import { Validator } from "./Validator";
export class IsValidNumber implements Validator {
  validate(value: any, context?: any): string[] {
    if (value === undefined || value === null) {
      return [`The property '${context?.propertyName}' must be defined.`];
    }

    const numb = typeof value === 'number' ? value : Number(value);

    if (isNaN(numb)) {
      return [`The property '${context?.propertyName}' must be a valid number.`];
    }

    return [];
  }
}