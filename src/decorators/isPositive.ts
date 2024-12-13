import { MetadataManager } from "../core/MetadataManager";
import { IsPositiveValidator } from "../validators/IsPositiveValidator";

export function isPositive() {
  return function (target: any, propertyKey: string) {
    MetadataManager.storeRule(target, propertyKey, new IsPositiveValidator());
  };
}
