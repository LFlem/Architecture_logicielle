import { MetadataManager } from '../core/MetadataManager';
import { IsIdenticValidator } from '../validators/IsIdenticValidator';

export function isIdentic(otherProperty: string) {
  return function (target: any, propertyKey: string) {
    MetadataManager.storeRule(target, propertyKey, new IsIdenticValidator(otherProperty));
  };
}
