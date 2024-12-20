import { isIdentic } from "../src/decorators/isIdentic"; // Chemin à adapter selon votre structure
import { ValidationManager } from "../src/core/ValidationManager";
import { MetadataManager } from "../src/core/MetadataManager";
import { ValidationError } from "../src/errors/ValidationError";

describe("isIdentic Decorator", () => {
  class TestClass {
    field1!: string;

    @isIdentic("field1")
    field2!: string;
  }

  let testInstance: TestClass;

  beforeEach(() => {
    testInstance = new TestClass();
  });

  test("should store and retrieve metadata correctly", () => {
    const metadata = MetadataManager.getRules(TestClass.prototype, "field2");

    expect(metadata).toBeDefined();
    expect(metadata.length).toBe(1); // Vérifie qu'il y a une règle enregistrée
    expect(metadata[0].validate).toBeInstanceOf(Function); // Vérifie que la règle contient une méthode de validation
  });

  // test("should pass validation when the fields are identical", () => {
  //   testInstance.field1 = "value";
  //   testInstance.field2 = "value";

  //   expect(() => ValidationManager.validate(testInstance)).not.toThrow();
  // });

  // test("should fail validation when the fields are not identical", () => {
  //   testInstance.field1 = "value1";
  //   testInstance.field2 = "value2";

  //   expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
  //   try {
  //     ValidationManager.validate(testInstance);
  //   } catch (error) {
  //     if (error instanceof ValidationError) {
  //       expect(error.errors).toContain("The value must match of the field field1.");
  //     } else {
  //       throw error;
  //     }
  //   }
  // });
});
