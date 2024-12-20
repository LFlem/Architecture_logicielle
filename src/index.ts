// Export core functionality
export * from "./core/MetadataManager";
export * from "./core/ValidationManager";

/**
 * Validator library module
 * @module validator
 */

// Decorator exports
/**
 * @see {@link isUpperThan}
 * @see {@link isIdentic}
 * @see {@link isNegative}
 * @see {@link isValidDate}
 */
export * from "./decorators/isRequired";
export * from "./decorators/isPositive";
export * from "./decorators/isValidNumber";
export * from "./decorators/isUpperThan";
export * from "./decorators/isIdentic";
export * from "./decorators/isNegative";
export * from "./decorators/isValidDate";

// Validator exports
/**
 * @see {@link IsRequiredValidator}
 * @see {@link IsPositiveValidator}
 * @see {@link IsValidNumber}
 * @see {@link IsUpperThan}
 * @see {@link IsIdenticValidator}
 * @see {@link IsNegativeValidator}
 * @see {@link IsValidDate}
 */
export * from "./validators/IsRequiredValidator";
export * from "./validators/IsPositiveValidator";
export * from "./validators/IsValidNumber";
export * from "./validators/IsUpperThan";
export * from "./validators/IsIdenticValidator";
export * from "./validators/IsNegativeValidator";
export * from "./validators/IsValidDate";

// Error exports
/**
 * @see {@link ValidationError}
 */
export * from "./errors/ValidationError";

import { ValidationManager } from "./core/ValidationManager";

/**
 * Validates an object against its validation rules
 * @param {any} obj - Object to validate
 * @returns {string[]} Array of validation error messages
 * @throws {ValidationError} If validation fails
 * @example
 * const user = new User();
 * const errors = validate(user);
 */
export function validate(obj: any): string[] {
  return ValidationManager.validate(obj);
}
