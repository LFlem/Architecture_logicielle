import { MetadataManager } from "../core/MetadataManager";
import { IsPassword } from "../validators/IsPassword";
import { PassWrdOpt } from "../validators/IsPassword";

/**
 * Decorator that applies password validation rules
 * @param {Partial<PassWrdOpt>} [options] - Password validation options
 * @returns {PropertyDecorator} Property decorator function
 */
export function isPassword<T extends Object, V>(options?: Partial<PassWrdOpt>) {
  return function (
    _target: undefined,
    context: ClassFieldDecoratorContext<T, V>
  ) {
    return function (this: T, value: V): V {
      const propertyKey = String(context.name);
      MetadataManager.storeRule(
        this.constructor.prototype,
        propertyKey,
        new IsPassword(options)
      );
      return value;
    };
  };
}
