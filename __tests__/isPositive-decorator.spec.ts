import { isPositive } from "../src/decorators/isPositive";
import { ValidationManager } from "../src/core/ValidationManager";
import { ValidationError } from "../src/errors/ValidationError";
import { MetadataManager } from "../src/core/MetadataManager";

describe("isPositive Decorator", () => {
  class TestClass {
    @isPositive()
    positiveNumber!: number;
  }

  let testInstance: TestClass;

  beforeEach(() => {
    testInstance = new TestClass();
  });

  test("should store and retrieve metadata correctly", () => {
    const metadata = MetadataManager.getRules(TestClass.prototype, "positiveNumber");

    expect(metadata).toBeDefined();
    expect(metadata.length).toBe(1); // Vérifie qu'il y a une règle enregistrée
    expect(metadata[0].validate).toBeInstanceOf(Function); // Vérifie que la règle contient une méthode de validation
  });


  test("should pass validation for positive numbers", () => {
    testInstance.positiveNumber = 10;

    expect(() => ValidationManager.validate(testInstance)).not.toThrow();
  });

  test("should fail validation for zero", () => {
    testInstance.positiveNumber = 0;

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The value must be positive.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for non-number values", () => {
    // @ts-ignore
    testInstance.positiveNumber = "not a number";

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

  test("should fail validation for negative numbers", () => {
    testInstance.positiveNumber = -5;

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The value must be positive.");
      } else {
        throw error;
      }
    }
  });
});
