import { Validator } from "./Validator";

export class IsRegexValidator implements Validator {


    private regex : RegExp;
    constructor(regex : RegExp) {
        this.regex = regex;
    }
    validate(value: any, context?: any): string[] {
        if (typeof value !== "string") {
            return['The value is not a string'];
        }

        const verif = this.regex.test(value);
        if (!verif) {
            return['The value does not match the required pattern!'];
        }
        return [];
    }
}