import "reflect-metadata";
import { Validator } from "../validators/Validator";

/**
 * Manages validation metadata using reflection.
 */
export class MetadataManager {
  private static VALIDATORS_METADATA_KEY = Symbol("validators");

  /**
   * Stores a validation rule for a property.
   * @param {any} target - Target object
   * @param {string|symbol} propertyKey - Property to validate
   * @param {Validator} validator - Validator to apply
   * @throws {Error} If invalid arguments provided
   */
  static storeRule(
    target: any,
    propertyKey: string | symbol,
    validator: Validator
  ) {
    if (!target || !propertyKey || !validator) {
      throw new Error("Invalid arguments for storing validation rule");
    }

    const rules = this.getRules(target, propertyKey);
    rules.push(validator);
    Reflect.defineMetadata(
      this.VALIDATORS_METADATA_KEY,
      rules,
      target,
      String(propertyKey)
    );
  }

  /**
   * Gets validation rules for a property.
   * @param {any} target - Target object
   * @param {string|symbol} propertyKey - Property to get rules for
   * @returns {Validator[]} Array of validators
   */
  static getRules(target: any, propertyKey: string | symbol): Validator[] {
    if (!target || !propertyKey) {
      return [];
    }
    return (
      Reflect.getMetadata(
        this.VALIDATORS_METADATA_KEY,
        target,
        String(propertyKey)
      ) || []
    );
  }
}
