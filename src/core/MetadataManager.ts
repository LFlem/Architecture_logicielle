import "reflect-metadata";
import { Validator } from "../validators/Validator";

export class MetadataManager {
  private static VALIDATORS_METADATA_KEY = Symbol("validators");

  static storeRule(target: any, propertyKey: string | symbol, validator: Validator) {
    if (!target || !propertyKey || !validator) {
      throw new Error('Invalid arguments for storing validation rule');
    }

    const rules = this.getRules(target, propertyKey);
    rules.push(validator);
    Reflect.defineMetadata(this.VALIDATORS_METADATA_KEY, rules, target, String(propertyKey));
  }

  static getRules(target: any, propertyKey: string | symbol): Validator[] {
    if (!target || !propertyKey) {
      return [];
    }
    return Reflect.getMetadata(this.VALIDATORS_METADATA_KEY, target, String(propertyKey)) || [];
  }
}
