import { MetadataManager } from '../core/MetadataManager';
import { IsValidDate } from '../validators/IsValidDate';

export function isValidDate<T extends Object, V>(
  target: undefined,
  context: ClassFieldDecoratorContext<T, V>
) {
  return function (this: T, value: V) {
      const propertyKey = String(context.name);
      MetadataManager.storeRule(this.constructor.prototype, propertyKey, new IsValidDate());
      return value;
  };
}
