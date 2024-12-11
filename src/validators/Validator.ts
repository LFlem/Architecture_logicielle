export interface Validator {
  validate(value: any, context?: any): string[]; // Retourne une liste d'erreurs (vide si valide)
}
