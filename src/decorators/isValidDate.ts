import { MetadataManager } from '../core/MetadataManager';
import { IsValidDate } from '../validators/IsValidDate';

export function isValidDate() {
  return function (target: any, propertyKey: string) {
    MetadataManager.storeRule(target, propertyKey, new IsValidDate());
  };
}
