import { IsUpperThan } from '../src/validators/IsUpperThan';

describe('IsUpperThan', () => {


    it('should return no errors for a number greater than the reference', () => {
        const validator = new IsUpperThan(10);
        const result = validator.validate(20);
        expect(result).toEqual([]);

    });

    it('should return no errors for a date greater than the reference', () => {
        const validator = new IsUpperThan(new Date('2024-07-07'));
        const result = validator.validate(new Date('2024-08-07'));
        expect(result).toEqual([]);
    });

    it('should return an error for a number less than or equal to the reference', () => {
        const validator = new IsUpperThan(20);
        const result = validator.validate(10);

        const dvalidator = new IsUpperThan(new Date('2024-09-09'));
        const dresult = dvalidator.validate(new Date('2024-08-07'));

        expect(result).toEqual(['The value must be greater than 20.']);
        expect(dresult).toEqual(['The value must be greater than 2024-09-09T00:00:00.000Z.']);
    });

    it('should return error if a value is missing', () => {
        const validator = new IsUpperThan(10);
        expect(validator.validate(null)).toEqual(['The value cannot be null or undefined.']);
    });

    it('should return an error if the types of value and reference do not match', () => {
        const validator = new IsUpperThan(10);
        expect(validator.validate(new Date())).toEqual(['Reference must be of the same type as the value.']);

        const dateValidator = new IsUpperThan(new Date());
        expect(dateValidator.validate(15)).toEqual(['Reference must be of the same type as the value.']);
    });

});