import { isNegative } from "../src/decorators/isNegative"; // Chemin à adapter selon votre structure
import { ValidationManager } from "../src/core/ValidationManager";
import { MetadataManager } from "../src/core/MetadataManager";
import { ValidationError } from "../src/errors/ValidationError";

describe("isNegative Decorator", () => {
  class TestClass {
    @isNegative()
    negativeNumber!: number;
  }

  let testInstance: TestClass;

  beforeEach(() => {
    testInstance = new TestClass();
  });

  test("should store and retrieve metadata correctly", () => {
    const metadata = MetadataManager.getRules(TestClass.prototype, "negativeNumber");

    expect(metadata).toBeDefined();
    expect(metadata.length).toBe(1); // Vérifie qu'il y a une règle enregistrée
    expect(metadata[0].validate).toBeInstanceOf(Function); // Vérifie que la règle contient une méthode de validation
  });

  test("should pass validation for negative numbers", () => {
    testInstance.negativeNumber = -10;

    expect(() => ValidationManager.validate(testInstance)).not.toThrow();
  });

  test("should fail validation for positive numbers", () => {
    testInstance.negativeNumber = 5;

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The value must be negative.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for zero", () => {
    testInstance.negativeNumber = 0;

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The value must be negative.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for non-number values", () => {
    // @ts-ignore
    testInstance.negativeNumber = "not a number";

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The value must be a number.");
      } else {
        throw error;
      }
    }
  });
});
