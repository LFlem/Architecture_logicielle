import { MetadataManager } from "../core/MetadataManager";
import { IsValidNumber } from "../validators/IsValidNumber";

/**
 * Decorator that validates if a value is a valid number
 * @returns {PropertyDecorator} Property decorator function
 * @example
 * class Payment {
 *   @isValidNumber()
 *   amount: number;
 * }
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
