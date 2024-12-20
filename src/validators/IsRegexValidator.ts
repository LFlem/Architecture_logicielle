import { Validator } from "./Validator";

export class IsRegexValidator implements Validator {

    private regex : RegExp;
    private errmsg : string;

    constructor(regex : RegExp, errmsg : string) {
        this.regex = regex;
        this.errmsg = errmsg;
    }
    validate(value: any, context?: any): string[] {
        if (typeof value !== "string") {
            return['The value is not a string'];
        }

        const verif = this.regex.test(value);
        if (!verif) {
            return[`Error: ${this.errmsg}`];
        }
        return [];
    }
}