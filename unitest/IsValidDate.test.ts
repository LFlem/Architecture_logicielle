import { IsValidDate } from '../src/validators/IsValidDate'

describe('isValidDate', () => {
    let validator: IsValidDate;
    beforeEach(() => {
        validator = new IsValidDate();
    });

    it('should validate a correct date instance', () => {
        const result = validator.validate(new Date('2023-12-25'));
        expect(result).toEqual([]);
    });

    it('should validate the current date', () => {
        const result = validator.validate(new Date());
        expect(result).toEqual([]);
    });

    it('should return an error for an invalid date instance', () => {
        const result = validator.validate(new Date('invalid date'));
        expect(result).toEqual(['The value must be a valide date']);
    });
});