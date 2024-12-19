import { IsPositiveValidator } from '../src/validators/IsPositiveValidator';

describe('IsPositiveValidator', () => {
    let validator: IsPositiveValidator;

    beforeEach(() => {
        validator = new IsPositiveValidator();
    });

    it('should return no errors for positive numbers and zero', () => {
        expect(validator.validate(5)).toEqual([]);
        expect(validator.validate(0)).toEqual([]);
    });

    it('should return an error for negative numbers', () => {
        expect(validator.validate(-3)).toEqual(['The value must be positive']);
    });

    it('should return an error for non-number values', () => {
        expect(validator.validate('text')).toEqual(['The value must be a number']);
        expect(validator.validate(null)).toEqual(['The value must be a number']);
        expect(validator.validate(undefined)).toEqual(['The value must be a number']);
    });
});
