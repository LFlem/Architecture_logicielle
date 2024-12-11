import 'reflect-metadata';
import { Validator } from '../validators/Validator';

export class MetadataManager {
  static storeRule(target: any, propertyKey: string, validator: Validator) {
    const rules = Reflect.getMetadata('validators', target, propertyKey) || [];
    rules.push(validator);
    Reflect.defineMetadata('validators', rules, target, propertyKey);
  }

  static getRules(target: any, propertyKey: string): Validator[] {
    return Reflect.getMetadata('validators', target, propertyKey) || [];
  }

}