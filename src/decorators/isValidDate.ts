import { MetadataManager } from '../core/MetadataManager';
import { IsValidDate } from '../validators/IsValidDate';

/**
 * Decorator that validates if a value is a valid Date object
 * @returns {PropertyDecorator} Property decorator function
 * @example
 * class Event {
 *   @isValidDate()
 *   startDate: Date;
 * }
 */
export function isValidDate<T extends Object, V>() {
  return function (
    _target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (this: T, value: V): V {
      const propertyKey = String(context.name);
      MetadataManager.storeRule(
        this.constructor.prototype,
        propertyKey,
        new IsValidDate()
      );
      return value;
    };
  };
}
