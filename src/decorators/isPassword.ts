import { MetadataManager } from "../core/MetadataManager";
import { IsPassword } from "../validators/IsPassword";
import { PassWrdOpt } from "../validators/IsPassword";

/**
 * Décorateur pour valider les mots de passe avec des options personnalisées
 * @param options - Options pour le validateur de mot de passe
 */
export function isPassword(options?: Partial<PassWrdOpt>) {
  return function (target: any, propertyKey: string) {
    MetadataManager.storeRule(target, propertyKey, new IsPassword(options));
  };
}
