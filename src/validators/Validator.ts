export interface Validator {
  validate(value: any, context?: any): string[];
}
