// Export core functionality
export * from './core/MetadataManager';
export * from './core/ValidationManager';

// Export decorators
export * from './decorators/isRequired';
export * from './decorators/isPositive';
export * from './decorators/isValidNumber';
export * from './decorators/isUpperThan';
export * from './decorators/isIdentic';
export * from './decorators/isNegative';
export * from './decorators/isValidDate';

// Export validators
export * from './validators/IsRequiredValidator';
export * from './validators/IsPositiveValidator';
export * from './validators/IsValidNumber';
export * from './validators/IsUpperThan';
export * from './validators/IsIdenticValidator';
export * from './validators/IsNegativeValidator';
export * from './validators/IsValidDate';

// Export errors
export * from './errors/ValidationError';


import { ValidationManager } from "./core/ValidationManager";

export function validate(obj: any): string[]{
  return ValidationManager.validate(obj);
}
