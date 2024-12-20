import { MetadataManager } from '../core/MetadataManager';
import { IsLowerThan } from '../validators/IsLowerThan';

/**
 * Decorator that validates if a value is less than a reference value
 * @param {number|Date} ref - Reference value to compare against
 * @returns {PropertyDecorator} Property decorator function
 * @example
 * class Product {
 *   @isLowerThan(1000)
 *   price: number;
 * }
 */
export function isLowerThan<T extends Object, V>(ref: number | Date) {
  return function (
    _target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (this: T, value: V): V {
      const propertyKey = String(context.name);
      MetadataManager.storeRule(
        this.constructor.prototype,
        propertyKey,
        new IsLowerThan(ref)
      );
      return value;
    };
  };
}