export class ValidationError extends Error {
  // Liste des erreurs de validation
  public errors: string[];

  /**
   * Constructeur de ValidationError
   * @param errors Liste des messages d'erreur
   */
  constructor(errors: string[]) {
    // Appelle le constructeur de la classe Error avec un message générique
    super('Validation failed');
    
    // Assigne les erreurs spécifiques à la propriété `errors`
    this.errors = errors;

    // Définit explicitement le prototype pour la compatibilité avec instanceof
    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  /**
   * Formatte les erreurs en une chaîne de caractères lisible
   * @returns Chaîne contenant toutes les erreurs formatées
   */
  public formatErrors(): string {
    return this.errors.join('\n');
  }
}
