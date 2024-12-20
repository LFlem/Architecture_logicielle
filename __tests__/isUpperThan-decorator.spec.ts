import { isUpperThan } from "../src/decorators/isUpperThan"; // Chemin à adapter selon votre structure
import { ValidationManager } from "../src/core/ValidationManager";
import { MetadataManager } from "../src/core/MetadataManager";
import { ValidationError } from "../src/errors/ValidationError";

describe("isUpperThan Decorator for Numbers", () => {
  class NumberTestClass {
    @isUpperThan(10)
    greaterNumber!: number;
  }

  let numberTestInstance: NumberTestClass;

  beforeEach(() => {
    numberTestInstance = new NumberTestClass();
  });

  test("should store and retrieve metadata correctly for numbers", () => {
    const metadata = MetadataManager.getRules(NumberTestClass.prototype, "greaterNumber");

    expect(metadata).toBeDefined();
    expect(metadata.length).toBe(1); // Vérifie qu'il y a une règle enregistrée
    expect(metadata[0].validate).toBeInstanceOf(Function); // Vérifie que la règle contient une méthode de validation
  });

  test("should pass validation for a number greater than the reference", () => {
    numberTestInstance.greaterNumber = 15;

    expect(() => ValidationManager.validate(numberTestInstance)).not.toThrow();
  });

  test("should fail validation for a number less than or equal to the reference", () => {
    numberTestInstance.greaterNumber = 10;

    expect(() => ValidationManager.validate(numberTestInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(numberTestInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The value must be greater than 10.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for incompatible types", () => {
    // @ts-ignore
    numberTestInstance.greaterNumber = "not a number";

    expect(() => ValidationManager.validate(numberTestInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(numberTestInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The value must be a number or a valid date.");
      } else {
        throw error;
      }
    }
  });
});

describe("isUpperThan Decorator for Dates", () => {
  class DateTestClass {
    @isUpperThan(new Date("2023-01-01"))
    futureDate!: Date;
  }

  let dateTestInstance: DateTestClass;

  beforeEach(() => {
    dateTestInstance = new DateTestClass();
  });

    test("should store and retrieve metadata correctly for dates", () => {
    const metadata = MetadataManager.getRules(DateTestClass.prototype, "futureDate");

    expect(metadata).toBeDefined();
    expect(metadata.length).toBe(1); // Vérifie qu'il y a une règle enregistrée
    expect(metadata[0].validate).toBeInstanceOf(Function); // Vérifie que la règle contient une méthode de validation
  });

  test("should pass validation for a date greater than the reference", () => {
    dateTestInstance.futureDate = new Date("2023-12-31");

    expect(() => ValidationManager.validate(dateTestInstance)).not.toThrow();
  });

  test("should fail validation for a date less than or equal to the reference", () => {
    dateTestInstance.futureDate = new Date("2022-12-31");

    expect(() => ValidationManager.validate(dateTestInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(dateTestInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain(
          "The value must be greater than 2023-01-01T00:00:00.000Z."
        );
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for incompatible types", () => {
    // @ts-ignore
    dateTestInstance.futureDate = "not a date";

    expect(() => ValidationManager.validate(dateTestInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(dateTestInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The value must be a number or a valid date.");
      } else {
        throw error;
      }
    }
  });
});
