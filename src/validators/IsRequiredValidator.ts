import { Validator } from "./Validator";

export class IsRequiredValidator implements Validator {
  validate(value: any, context?: { propertyName: string }): string[] {
      if (value === null || value === undefined || value === "") {
          return [`The property '${context?.propertyName}' is required but is null, undefined, or empty.`];
      }
      return [];
  }
}
