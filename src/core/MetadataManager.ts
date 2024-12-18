import "reflect-metadata";
import { Validator } from "../validators/Validator";

export class MetadataManager {
  private static VALIDATORS_METADATA_KEY = Symbol("validators");

  static storeRule(target: any, propertyKey: string, validator: Validator) {
      const rules = Reflect.getMetadata(this.VALIDATORS_METADATA_KEY, target, propertyKey) || [];
      rules.push(validator);
      Reflect.defineMetadata(this.VALIDATORS_METADATA_KEY, rules, target, propertyKey);
  }

  static getRules(target: any, propertyKey: string): Validator[] {
      return Reflect.getMetadata(this.VALIDATORS_METADATA_KEY, target, propertyKey) || [];
  }
}
