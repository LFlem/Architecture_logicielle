import { MetadataManager } from '../core/MetadataManager';
import { IsUpperThan } from '../validators/IsUpperThan';

/**
 * Decorator that validates if a value is greater than a reference value
 * @param {number|Date} ref - Reference value to compare against
 * @returns {PropertyDecorator} Property decorator function
 * @example
 * class Product {
 *   @isUpperThan(0)
 *   quantity: number;
 * }
 */
export function isUpperThan<T extends Object, V>(ref: number | Date) {
  return function (
    _target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (this: T, value: V): V {
      const propertyKey = String(context.name);
      MetadataManager.storeRule(
        this.constructor.prototype,
        propertyKey,
        new IsUpperThan(ref)
      );
      return value;
    };
  };
}