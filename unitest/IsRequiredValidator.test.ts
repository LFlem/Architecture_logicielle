import { IsRequiredValidator } from '../src/validators/IsRequiredValidator';

describe("IsRequiredValidator", () => {

    let validator: IsRequiredValidator;
    beforeEach(() => {
        validator = new IsRequiredValidator()
    });

    it('should return errors for null or undefined value ', () => {
        expect(validator.validate(null)).toEqual(['The value is required cannot be null, undefined or empty.']);
        expect(validator.validate(undefined)).toEqual(['The value is required cannot be null, undefined or empty.']);
        expect(validator.validate('')).toEqual(['The value is required cannot be null, undefined or empty.']);
    });

    it('should return no errors for a other value ', () => {
        expect(validator.validate('text')).toEqual([]);
        expect(validator.validate(true)).toEqual([]);
        expect(validator.validate(1234)).toEqual([]);
        expect(validator.validate([1, 2, 3])).toEqual([]);
    });

});