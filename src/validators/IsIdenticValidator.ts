import { Validator } from "./Validator";

export class IsIdenticValidator implements Validator {

    private myfield: string;
    constructor(myfield: string) {
        this.myfield = myfield;
    }

    validate(value: any, context?: any): string[] {
        if (!context || !context[this.myfield])
            return ['The field is missing in the context.'];
        if (value !== context[this.myfield])
            return [`The value must match of the field ${this.myfield}.`];
        return [];
    }
}