import { MetadataManager } from "../core/MetadataManager";
import { IsValidNumber } from "../validators/IsValidNumber";

/**
 * Décorateur pour valider que la valeur est un nombre valide
 */
export function isValidNumber<T extends Object, V>() {
  return function (
    _target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (this: T, value: V): V {
      const propertyKey = String(context.name);
      MetadataManager.storeRule(
        this.constructor.prototype,
        propertyKey,
        new IsValidNumber()
      );
      return value;
    };
  };
}
