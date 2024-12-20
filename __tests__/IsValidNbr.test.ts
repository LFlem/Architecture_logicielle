import { IsValidNumber } from "../src/validators/IsValidNumber";

describe("IsValidNbr", () => {
    let validator: IsValidNumber;

    beforeEach(() => {
        validator = new IsValidNumber();
    });

    it('should return no errors for a valid number', () => {
        expect(validator.validate(123)).toEqual([]);
        expect(validator.validate(0)).toEqual([]);
        expect(validator.validate(-456)).toEqual([]);
        expect(validator.validate(1.23)).toEqual([]);
      });
      
      it('should return an error', () => {
        expect(validator.validate(NaN)).toEqual(["The property 'undefined' must be a valid number."]);
        expect(validator.validate(null)).toEqual(["The property 'undefined' must be defined."]);
        expect(validator.validate(undefined)).toEqual(["The property 'undefined' must be defined."]);
        expect(validator.validate(false)).toEqual([`The property 'undefined' must be a valid number.`]);
        expect(validator.validate('123')).toEqual(["The property 'undefined' must be a valid number."]);
    });
});