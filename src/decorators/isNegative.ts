import { MetadataManager } from '../core/MetadataManager';
import { IsNegativeValidator } from '../validators/IsNegativeValidator';

/**
 * Decorator that validates if a number is negative
 * @returns {PropertyDecorator} Property decorator function
 * @example
 * class Temperature {
 *   @isNegative()
 *   belowZero: number;
 * }
 */
export function isNegative<T extends Object, V>() {
  return function (
    _target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (this: T, value: V): V {
      const propertyKey = String(context.name);
      MetadataManager.storeRule(
        this.constructor.prototype,
        propertyKey,
        new IsNegativeValidator()
      );
      return value;
    };
  };
}
