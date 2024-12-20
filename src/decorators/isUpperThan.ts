import { MetadataManager } from '../core/MetadataManager';
import { IsUpperThan } from '../validators/IsUpperThan';

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