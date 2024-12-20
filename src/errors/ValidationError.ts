/**
 * Custom error class for validation failures.
 */
export class ValidationError extends Error {
  /**
   * List of validation error messages.
   */
    public errors: string[];

  /**
   * Creates a new ValidationError instance.
   * @param errors - Array of validation error messages
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
   * Formats all errors into a readable string.
   * @returns A newline-separated string of error messages
   */
  public formatErrors(): string {
    return this.errors.join("\n");
  }

  /**
   * Converts the error to a JSON format.
   * @returns JSON representation of the error
   */
  public toJSON() {
    return { message: this.message, errors: this.errors };
  }
}
