import { isRequired } from "../src/decorators/isRequired"; // Chemin à adapter selon votre structure
import { ValidationManager } from "../src/core/ValidationManager";
import { MetadataManager } from "../src/core/MetadataManager";
import { ValidationError } from "../src/errors/ValidationError";

describe("isRequired Decorator", () => {
  class TestClass {
    @isRequired()
    requiredField!: string;
  }

  let testInstance: TestClass;

  beforeEach(() => {
    testInstance = new TestClass();
  });

  test("should store and retrieve metadata correctly", () => {
    const metadata = MetadataManager.getRules(TestClass.prototype, "requiredField");

    expect(metadata).toBeDefined();
    expect(metadata.length).toBe(1); // Vérifie qu'il y a une règle enregistrée
    expect(metadata[0].validate).toBeInstanceOf(Function); // Vérifie que la règle contient une méthode de validation
  });

  test("should pass validation when the field is defined", () => {
    testInstance.requiredField = "A valid value";

    expect(() => ValidationManager.validate(testInstance)).not.toThrow();
  });

  test("should fail validation when the field is undefined", () => {
    // @ts-ignore
    testInstance.requiredField = undefined;

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain(`The property 'requiredField' is required but is null, undefined, or empty.`);
      } else {
        throw error;
      }
    }
  });

  test("should fail validation when the field is null", () => {
    // @ts-ignore
    testInstance.requiredField = null;

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The property 'requiredField' is required but is null, undefined, or empty.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation when the field is an empty string", () => {
    testInstance.requiredField = "";

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The property 'requiredField' is required but is null, undefined, or empty.");
      } else {
        throw error;
      }
    }
  });
});
