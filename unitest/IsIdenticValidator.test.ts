import { IsIdenticValidator } from '../src/validators/IsIdenticValidator'

describe('IsIdenticValidator', () => {

    let validator: IsIdenticValidator;
    beforeEach(() => { validator = new IsIdenticValidator('password') });

    it('should return no errors when values match', () => {
        const context = { password: '12345' };
        const result = validator.validate('12345', context);
        expect(result).toEqual([]);
    });

    it('should return an error when the context is missing the field', () => {
        const context = { confirmPassword: '12345' };
        const result = validator.validate('12345', context);
        expect(result).toEqual(['The field is missing in the context!']);
    });

    it('should return an error when the value is undefined but the field exists', () => {
        const context = { password: '12345' };
        const result = validator.validate(undefined, context);
        expect(result).toEqual(['The value must match of the field password!']);
    });
});