import { Validator } from "./Validator";

export class PassWrdOpt {
    minLength: number;
    maxLength: number;
    requireUppercase: boolean;
    requireLowercase: boolean;
    requireNumber: boolean;
    requireSpecialChar: boolean;
    noSpaces: boolean;

    constructor(options?: Partial<PassWrdOpt>) {
        this.minLength = options?.minLength ?? 8;
        this.maxLength = options?.maxLength ?? 128;
        this.requireUppercase = options?.requireUppercase ?? true;
        this.requireLowercase = options?.requireLowercase ?? true;
        this.requireNumber = options?.requireNumber ?? true;
        this.requireSpecialChar = options?.requireSpecialChar ?? true;
        this.noSpaces = options?.noSpaces ?? true;
    }

}

export class IsPassword implements Validator {

    private opt: PassWrdOpt;
    constructor(options?: Partial<PassWrdOpt>) {
        this.opt = new PassWrdOpt(options);
    }

    validate(value: any, context?: any): string[] {
        const error: string[] = [];


        if (typeof value !== 'string') {
            error.push('The value must be a string.');
            return error;
        }

        if (value.length < this.opt.minLength)
            error.push(`Password must be at least ${this.opt.minLength} characters long.`);

        if (value.length > this.opt.maxLength)
            error.push(`Password must not exceed ${this.opt.maxLength} characters.`);
        if (!/[A-Z]/.test(value) && this.opt.requireUppercase) {
            error.push('Password must contain at least one uppercase letter.');
        }
        if (!/[a-z]/.test(value) && this.opt.requireLowercase) {
            error.push('Password must contain at least one lowercase letter.');
        }
        if (!/[0-9]/.test(value) && this.opt.requireNumber) {
            error.push('Password must contain at least one number letter.');
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value) && this.opt.requireSpecialChar) {
            error.push('Password must contain at least one specialcaractere letter.');
        }
        if (/\s/.test(value) && this.opt.noSpaces) {
            error.push('Password must not contain spaces.');
        }

        return error;
    }
}

/*const defaultPas = new IsPassword();

console.log(defaultPas.validate('Pass12345!'));
console.log(defaultPas.validate('weakpass'));

//

const passwordValidator = new IsPassword({
    minLength: 10,
    requireSpecialChar: false,
    noSpaces: false,
});

console.log(passwordValidator.validate('Pass12345'));
console.log(passwordValidator.validate('pass12345'));*/