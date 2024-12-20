import { MetadataManager } from '../core/MetadataManager';
import { IsNegativeValidator } from '../validators/IsNegativeValidator';

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