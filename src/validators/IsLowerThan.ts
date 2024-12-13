import { Validator } from "./Validator";

export class IsLowerThan implements Validator {
    private myref: number | Date;
    constructor(myref: number | Date) {
        this.myref = myref;
    }

    validate(value: any, context?: any): string[] {
        const errors: string[] = [];
        if (typeof value === 'number') {
            if (typeof this.myref !== 'number') {
                errors.push('Reference must both be numbers.');
                return errors;
            }
            if (value >= this.myref) {
                errors.push('The value must be less than ${this.myref}.');
            }
        } else if (value instanceof Date) {
            if (!(this.myref instanceof Date)) {
                errors.push('Reference must both be dates.');
                return errors;
            }
            if (value.getTime() >= this.myref.getTime()) {
                errors.push('The value must be less than ${this.myref.toISOString()}.');
            }
        } else {
            errors.push('The value must be a number or a valid date.');
        }
        return errors;
    }
}