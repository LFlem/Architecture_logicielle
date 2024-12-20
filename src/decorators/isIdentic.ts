import { MetadataManager } from '../core/MetadataManager';
import { IsIdenticValidator } from '../validators/IsIdenticValidator';

export function isIdentic<T extends Object, V>(field: string) {
  return function (
    _target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (this: T, value: V): V {
      const propertyKey = String(context.name);
      MetadataManager.storeRule(
        this.constructor.prototype,
        propertyKey,
        new IsIdenticValidator(field)
      );
      return value;
    };
  };
}
