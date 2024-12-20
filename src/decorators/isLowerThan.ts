import { MetadataManager } from '../core/MetadataManager';
import { IsLowerThan } from '../validators/IsLowerThan';

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