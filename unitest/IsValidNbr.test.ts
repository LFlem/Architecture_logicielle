import { IsValidNbr } from "../src/validators/IsValidNbr";

describe("IsValidNbr", () => {
    let validator: IsValidNbr;

    beforeEach(() => {
        validator = new IsValidNbr();
    });

    it('should return no errors for a valid number', () => {
        expect(validator.validate(123)).toEqual([]);
        expect(validator.validate(0)).toEqual([]);
        expect(validator.validate(-456)).toEqual([]);
        expect(validator.validate(1.23)).toEqual([]);
    });

    it('should return an error', () => {
        expect(validator.validate(NaN)).toEqual(['The value must be a valid number.']);
        expect(validator.validate(null)).toEqual(['The value must be a valid number.']);
        expect(validator.validate(false)).toEqual(['The value must be a valid number.']);
        expect(validator.validate(undefined)).toEqual(['The value must be a valid number.']);
        expect(validator.validate('123')).toEqual(['The value must be a valid number.']);
    });
});