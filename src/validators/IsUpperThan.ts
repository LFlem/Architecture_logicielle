import { Validator } from "./Validator";

export class IsUpperThan implements Validator {
    private myref: number | Date;
    constructor(myref: number | Date) {
        this.myref = myref;
    }

    validate(value: any, context?: any): string[] {
        const errors: string[] = [];
        if (value === null || value === undefined) {
            errors.push('The value to compare is missing!');
            return errors;
        }

        if (typeof value === 'number') {
            if (typeof this.myref !== 'number') {
                errors.push('Reference must both be numbers.');
                return errors;
            }
            if (value <= this.myref) {
                errors.push('The value must be greater than reference.');
            }
        } else if (value instanceof Date) {
            if (!(this.myref instanceof Date)) {
                errors.push('Reference must both be dates.');
                return errors;
            }
            if (value.getTime() <= this.myref.getTime()) {
                errors.push('The value must be greater than reference.');
            }
        } else {
            errors.push('The value must be a number or a valid date.');
        }
        return errors;
    }
}
