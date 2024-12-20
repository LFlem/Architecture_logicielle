import { IsPassword, PassWrdOpt } from '../src/validators/IsPassword';

describe('IsPasswordValidator', () => {

    it('should return no errors for a valid password', () => {
        const validator = new IsPassword();
        const result = validator.validate('Valid123!');
        expect(result).toEqual([]);
    });

    it('should return no errors for a valid password', () => {
        const validator = new IsPassword({ minLength: 10 });
        const result = validator.validate('Valid1!');
        expect(result).toEqual(['Password must be at least 10 characters long.']);
    });

    it('should return an error if lowercase is required but missing', () => {
        const validator = new IsPassword({ requireLowercase: true });
        const result = validator.validate('UPPERCASE1!');
        expect(result).toEqual(['Password must contain at least one lowercase letter.']);
    });

    it('should return an error if special characters are required but missing', () => {
        const validator = new IsPassword({ requireSpecialChar: true });
        const result = validator.validate('Pasdespecial123');
        expect(result).toEqual(['Password must contain at least one specialcaractere letter.']);
    });

    it('should do custom of passwrd rules', () => {

        const options: PassWrdOpt = {
            minLength: 5,
            maxLength: 10,
            requireUppercase: false,
            requireLowercase: false,
            requireNumber: true,
            requireSpecialChar: false,
            noSpaces: false,
        };
        const validator = new IsPassword(options);

        const validResult = validator.validate('12345');
        expect(validResult).toEqual([]);

        const invalidResult = validator.validate('short');
        expect(invalidResult).toEqual(['Password must contain at least one number letter.']);
    });

});