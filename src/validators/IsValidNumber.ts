import { Validator } from "./Validator";

export class IsValidNumber implements Validator {
    validate(value: any, context?: any): string[] {
        const numb = typeof value === 'number' ? value : Number(value);
        if (isNaN(numb)) {
            return['The value must be a valid number.'];
        }
        return [];
    }
}


/*const validDateValidator = new IsValidNbr();
console.log(validDateValidator.validate(7));
console.log(validDateValidator.validate('z'));
console.log(validDateValidator.validate('44'));
console.log(validDateValidator.validate(-7));*/