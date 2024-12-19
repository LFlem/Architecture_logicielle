import { Validator } from "./Validator";

export class IsValidNbr implements Validator {
    validate(value: any, context?: any): string[] {
        if (typeof value !== 'number' || isNaN(value)) {
            return['The value must be a valid number.'];
        }
        return [];
    }
}