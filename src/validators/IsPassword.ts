import { Validator } from "./Validator";

/**
 * Password validation options.
 */
export class PassWrdOpt {
  /** Minimum password length */
  minLength: number;
  /** Maximum password length */
  maxLength: number;
  /** Require uppercase letters */
  requireUppercase: boolean;
  /** Require lowercase letters */
  requireLowercase: boolean;
  /** Require numbers */
  requireNumber: boolean;
  /** Require special characters */
  requireSpecialChar: boolean;
  /** Disallow spaces */
  noSpaces: boolean;

  /**
   * Creates password validation options.
   * @param {Partial<PassWrdOpt>} [options] - Optional password requirements
   */
  constructor(options?: Partial<PassWrdOpt>) {
    this.minLength = options?.minLength ?? 8;
    this.maxLength = options?.maxLength ?? 128;
    this.requireUppercase = options?.requireUppercase ?? true;
    this.requireLowercase = options?.requireLowercase ?? true;
    this.requireNumber = options?.requireNumber ?? true;
    this.requireSpecialChar = options?.requireSpecialChar ?? true;
    this.noSpaces = options?.noSpaces ?? true;
  }
}

/**
 * Password validator with customizable rules.
 * @implements {Validator}
 */
export class IsPassword implements Validator {
  private opt: PassWrdOpt;

  /**
   * Creates a password validator.
   * @param {Partial<PassWrdOpt>} [options] - Password validation options
   */
  constructor(options?: Partial<PassWrdOpt>) {
    this.opt = new PassWrdOpt(options);
  }

  /**
   * Validates a password against configured rules.
   * @param {any} value - Password to validate
   * @param {any} [context] - Validation context
   * @returns {string[]} Array of validation error messages
   */
  validate(value: any, context?: any): string[] {
    const error: string[] = [];

    if (typeof value !== "string") {
      error.push("The value must be a string.");
      return error;
    }

    if (value.length < this.opt.minLength)
      error.push(
        `Password must be at least ${this.opt.minLength} characters long.`
      );

    if (value.length > this.opt.maxLength)
      error.push(`Password must not exceed ${this.opt.maxLength} characters.`);
    if (!/[A-Z]/.test(value) && this.opt.requireUppercase) {
      error.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(value) && this.opt.requireLowercase) {
      error.push("Password must contain at least one lowercase letter.");
    }
    if (!/[0-9]/.test(value) && this.opt.requireNumber) {
      error.push("Password must contain at least one number letter.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value) && this.opt.requireSpecialChar) {
      error.push("Password must contain at least one specialcaractere letter.");
    }
    if (/\s/.test(value) && this.opt.noSpaces) {
      error.push("Password must not contain spaces.");
    }

    return error;
  }
}
