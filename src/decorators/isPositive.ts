import { MetadataManager } from "../core/MetadataManager";
import { IsPositiveValidator } from "../validators/IsPositiveValidator";

/**
 * Decorator that validates if a number is positive
 * @param {Object} target - Class prototype
 * @param {string|symbol} propertyKey - Property name
 */
export function isPositive<T extends Object, V>() {
  return function (
    _target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (this: T, value: V): V {
      const propertyKey = String(context.name);
      MetadataManager.storeRule(
        this.constructor.prototype,
        propertyKey,
        new IsPositiveValidator()
      );
      return value;
    };
  };
}
