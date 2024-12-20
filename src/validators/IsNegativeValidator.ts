import { Validator } from "./Validator";

export class IsNegativeValidator implements Validator {
    validate(value: any, context?: any): string[] {
        if (typeof value !== 'number') {
            return ['The value must be a number.'];
        }
        if (value >= 0) {
            return ['The value must be negative.'];
        }
        return [];
    }
}