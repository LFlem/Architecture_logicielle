import { isPassword } from "../src/decorators/isPassword"; // Chemin à adapter selon votre structure
import { ValidationManager } from "../src/core/ValidationManager";
import { ValidationError } from "../src/errors/ValidationError";

describe("isPassword Decorator", () => {
  class TestClass {
    @isPassword({
      minLength: 8,
      maxLength: 20,
      requireUppercase: true,
      requireLowercase: true,
      requireNumber: true,
      requireSpecialChar: true,
      noSpaces: true,
    })
    password!: string;
  }

  let testInstance: TestClass;

  beforeEach(() => {
    testInstance = new TestClass();
  });

  test("should pass validation for a valid password", () => {
    testInstance.password = "Valid@123";

    expect(() => ValidationManager.validate(testInstance)).not.toThrow();
  });

  test("should fail validation for a password too short", () => {
    testInstance.password = "Short1!";

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("Password must be at least 8 characters long.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for a password too long", () => {
    testInstance.password = "A".repeat(21) + "1!";

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("Password must not exceed 20 characters.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for a password without an uppercase letter", () => {
    testInstance.password = "valid@123";

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("Password must contain at least one uppercase letter.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for a password without a lowercase letter", () => {
    testInstance.password = "VALID@123";

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("Password must contain at least one lowercase letter.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for a password without a number", () => {
    testInstance.password = "Valid@PWD";

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("Password must contain at least one number letter.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for a password without a special character", () => {
    testInstance.password = "Valid123";

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("Password must contain at least one specialcaractere letter.");
      } else {
        throw error;
      }
    }
  });

  test("should fail validation for a password with spaces", () => {
    testInstance.password = "Valid 123!";

    expect(() => ValidationManager.validate(testInstance)).toThrow(ValidationError);
    try {
      ValidationManager.validate(testInstance);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("Password must not contain spaces.");
      } else {
        throw error;
      }
    }
  });
});
