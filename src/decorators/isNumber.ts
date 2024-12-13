import { MetadataManager } from "../core/MetadataManager";
import { IsValidNbr } from "../validators/IsValidNbr";

/**
 * Décorateur pour valider que la valeur est un nombre valide
 */
export function isValidNbr() {
  return function (target: any, propertyKey: string) {
    MetadataManager.storeRule(target, propertyKey, new IsValidNbr()); // Stocke le validateur pour cette propriété
  };
}
