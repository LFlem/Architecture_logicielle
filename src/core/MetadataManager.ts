import "reflect-metadata";
import { Validator } from "../validators/Validator";

/**
 * Manages validation metadata using reflection.
 */
export class MetadataManager {
  private static VALIDATORS_METADATA_KEY = Symbol("validators");

  /**
   * Stores a validation rule for a property.
   * @param target - The target object
   * @param propertyKey - The property to validate
   * @param validator - The validator to apply
   * @throws {Error} If invalid arguments are provided
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
   * Retrieves validation rules for a property.
   * @param target - The target object
   * @param propertyKey - The property to retrieve rules for
   * @returns Array of validators associated with the property
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
