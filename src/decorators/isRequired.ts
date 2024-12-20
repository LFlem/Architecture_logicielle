import { MetadataManager } from "../core/MetadataManager";
import { IsRequiredValidator } from "../validators/IsRequiredValidator";

/**
 * Decorator that marks a property as required
 * @param {Object} target - Class prototype
 * @param {string|symbol} propertyKey - Property name
 */
export function isRequired<T extends Object, V>() {
  return function (
    _target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (this: T, value: V): V {
      const propertyKey = String(context.name);
      MetadataManager.storeRule(
        this.constructor.prototype,
        propertyKey,
        new IsRequiredValidator()
      );
      return value;
    };
  };
}
