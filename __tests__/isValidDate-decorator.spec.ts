import { isValidDate } from "../src/decorators/isValidDate"; // Chemin à adapter selon votre structure
import { ValidationManager } from "../src/core/ValidationManager";
import { MetadataManager } from "../src/core/MetadataManager";
import { ValidationError } from "../src/errors/ValidationError";

describe("isValidDate Decorator", () => {
  class TestClass {
    @isValidDate()
    dateField!: Date;
  }

  let testInstance: TestClass;

  beforeEach(() => {
    testInstance = new TestClass();
  });

  test("should store and retrieve metadata correctly", () => {
    const metadata = MetadataManager.getRules(TestClass.prototype, "dateField");

    expect(metadata).toBeDefined();
    expect(metadata.length).toBe(1); // Vérifie qu'il y a une règle enregistrée
    expect(metadata[0].validate).toBeInstanceOf(Function); // Vérifie que la règle contient une méthode de validation
  });

  test("should pass validation for a valid date", () => {
    testInstance.dateField = new Date("2023-12-31");

    expect(() => ValidationManager.validate(testInstance)).not.toThrow();
  });

  test("should fail validation for an invalid date", () => {
    // @ts-ignore
    testInstance.dateField = new Date("invalid date");

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The value must be a valid date.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for non-date values", () => {
    // @ts-ignore
    testInstance.dateField = "not a date";

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The value must be a valid date.");
      } else {
        throw error;
      }
    }
  });
});
