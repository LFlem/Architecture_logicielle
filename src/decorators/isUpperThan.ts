import { MetadataManager } from '../core/MetadataManager';
import { IsUpperThan } from '../validators/IsUpperThan';

export function isUpperThan(reference: number | Date) {
  return function (target: any, propertyKey: string) {
    MetadataManager.storeRule(target, propertyKey, new IsUpperThan(reference));
  };
}
