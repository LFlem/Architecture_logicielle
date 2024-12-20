import { isValidNumber } from "../src/decorators/isValidNumber"; // Chemin à adapter selon votre structure
import { ValidationManager } from "../src/core/ValidationManager";
import { MetadataManager } from "../src/core/MetadataManager";
import { ValidationError } from "../src/errors/ValidationError";

describe("isValidNumber Decorator", () => {
  class TestClass {
    @isValidNumber()
    numberField!: any;
  }

  let testInstance: TestClass;

  beforeEach(() => {
    testInstance = new TestClass();
  });

  test("should store and retrieve metadata correctly", () => {
    const metadata = MetadataManager.getRules(TestClass.prototype, "numberField");

    expect(metadata).toBeDefined();
    expect(metadata.length).toBe(1); // Vérifie qu'il y a une règle enregistrée
    expect(metadata[0].validate).toBeInstanceOf(Function); // Vérifie que la règle contient une méthode de validation
  });

  test("should pass validation for valid numbers", () => {
    testInstance.numberField = 123;

    expect(() => ValidationManager.validate(testInstance)).not.toThrow();
  });

  test("should pass validation for strings that can be converted to numbers", () => {
    testInstance.numberField = "123";

    expect(() => ValidationManager.validate(testInstance)).not.toThrow();
  });

  test("should fail validation for non-numeric strings", () => {
    testInstance.numberField = "abc";

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The property 'numberField' must be a valid number.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for null values", () => {
    testInstance.numberField = null;

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The property 'numberField' must be defined.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for undefined values", () => {
    // @ts-ignore
    testInstance.numberField = undefined;

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The property 'numberField' must be defined.");
      } else {
        throw error;
      }
    }
  });
});
