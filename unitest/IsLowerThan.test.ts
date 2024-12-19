import { IsLowerThan } from '../src/validators/IsLowerThan';

describe('IsLowerThan', () => {

    it('should return no errors for a number Lower than the reference', () => {
        const validator = new IsLowerThan(10);
        const result = validator.validate(5);
        expect(result).toEqual([]);
    });

    it('should return no errors for a date lower than the reference', () => {
        const validator = new IsLowerThan(new Date('2024-07-07'));
        const result = validator.validate(new Date('2024-05-05'));
        expect(result).toEqual([]);
    });

    it('should return an error for a number less than or equal to the reference', () => {
        const validator = new IsLowerThan(10);
        const result = validator.validate(20);

        const dvalidator = new IsLowerThan(new Date('2024-09-09'));
        const dresult = dvalidator.validate(new Date('2024-10-10'));

        expect(result).toEqual(['The value must be less than reference.']);
        expect(dresult).toEqual(['The value must be less than reference.']);
    });

    it('should return error if a value is missing', () => {
        const validator = new IsLowerThan(10);
        expect(validator.validate(null)).toEqual(['The value to compare is missing!']);
    });

    it('should return an error if the types of value and reference do not match', () => {
        const validator = new IsLowerThan(10);
        expect(validator.validate(new Date())).toEqual(['Reference must both be dates.']);

        const dateValidator = new IsLowerThan(new Date());
        expect(dateValidator.validate(15)).toEqual(['Reference must both be numbers.']);
    });

});