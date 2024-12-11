import { Validator } from "./Validator";

export class IsRequiredValidator implements Validator {
  validate(value: any, context?: any): string[] {
      if (value === null || value === undefined || value === "") {
        return ['The value is null or undefined'];
      }
      return [];
  }
}

