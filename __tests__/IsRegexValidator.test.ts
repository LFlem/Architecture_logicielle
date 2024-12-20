import { IsRegexValidator } from '../src/validators/IsRegexValidator'

describe('IsRegexValid', () => {

    it('should return no errors for a valid value', () => {
        const validator = new IsRegexValidator(/^[a-zA-Z]+$/, 'The value must be a character');
        expect(validator.validate('ValidString')).toEqual([]);
    });

    it('should return an error for a non-string value', () => {
        const validator = new IsRegexValidator(/^[a-zA-Z]+$/, 'The value must be a character');
        expect(validator.validate(12345)).toEqual(['The value is not a string']);
        expect(validator.validate(null)).toEqual(['The value is not a string']);
        expect(validator.validate(undefined)).toEqual(['The value is not a string']);
      });
      it('should allow custom error messages', () => {
        const validator = new IsRegexValidator(/^\d+$/, 'Only numbers are allowed');
        expect(validator.validate('abc')).toEqual(['Error: Only numbers are allowed']);
      });

});