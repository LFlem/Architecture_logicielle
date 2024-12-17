import { MetadataManager } from '../core/MetadataManager';
import { IsLowerThan } from '../validators/IsLowerThan';

export function isLowerThan(reference: number | Date) {
  return function (target: any, propertyKey: string) {
    MetadataManager.storeRule(target, propertyKey, new IsLowerThan(reference));
  };
}
