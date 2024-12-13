import { ValidationManager } from "./core/ValidationManager";

export function validate(obj: any): string[]{
  return ValidationManager.validate(obj);
}