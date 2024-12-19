import { IsNegativeValidator } from "../src/validators/IsNegativeValidator";

describe("IsNegativeValidator", () => {

    let validator: IsNegativeValidator;
    beforeEach(() => {
        validator = new IsNegativeValidator();
    });

    it('should return no errors for negative numbers', () => {
        expect(validator.validate(-5)).toEqual([]);
    });

    it('should return an error for positive numbers', () => {
        expect(validator.validate(3)).toEqual(['The value must be negative']);
        expect(validator.validate(0)).toEqual(['The value must be negative']);
    });

    it('should return an error for non-number values', () => {
        expect(validator.validate('text')).toEqual(['The value must be a number']);
        expect(validator.validate(null)).toEqual(['The value must be a number']);
        expect(validator.validate(undefined)).toEqual(['The value must be a number']);
    });

});