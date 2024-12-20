/**
 * Custom error class for validation failures.
 * @extends Error
 */
export class ValidationError extends Error {
  /**
   * List of validation error messages
   * @type {string[]}
   */
  public errors: string[];

  /**
   * Creates a new ValidationError instance
   * @param {string[]} errors - Array of validation error messages
   */
  constructor(errors: string[]) {
    // Appelle le constructeur de la classe Error avec un message générique
    super("Validation failed");

    // Assigne les erreurs spécifiques à la propriété `errors`
    this.errors = errors;

    // Définit explicitement le prototype pour la compatibilité avec instanceof
    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  /**
   * Formats all errors into a readable string
   * @returns {string} Newline-separated error messages
   */
  public formatErrors(): string {
    return this.errors.join("\n");
  }

  /**
   * Converts error to JSON format
   * @returns {{message: string, errors: string[]}} JSON representation
   */
  public toJSON() {
    return { message: this.message, errors: this.errors };
  }
}
