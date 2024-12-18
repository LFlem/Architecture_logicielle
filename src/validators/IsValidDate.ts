import { Validator } from "./Validator";

export class IsValidDate implements Validator {
    validate(value: any, context?: any): string[] {
        const errors : string[] = [];
        if (!(value instanceof Date)|| isNaN(value.getTime())) {
            errors.push('The value must be a valid date.');
        }
        return errors;
    }
}
