import { MetadataManager } from '../core/MetadataManager';
import { IsNegativeValidator } from '../validators/IsNegativeValidator';

export function isNegative() {
  return function (target: any, propertyKey: string) {
    MetadataManager.storeRule(target, propertyKey, new IsNegativeValidator());
  };
}
