import { MetadataManager } from '../core/MetadataManager';
import { IsRequiredValidator } from '../validators/IsRequiredValidator';

export function isRequired() {
  return function (target: any, propertyKey: string) {
    MetadataManager.storeRule(target, propertyKey, new IsRequiredValidator());
  };
}
