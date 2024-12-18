// import { isRequired } from "../src/decorators/isRequired";
// import { isPositive } from "../src/decorators/isPositive";
// import { isNegative } from "../src/decorators/isNegative";
// import { isValidNbr } from "../src/decorators/isNumber";
// import { isValidDate } from "../src/decorators/isValidDate";
// import { isUpperThan } from "../src/decorators/isUpperThan";
// import { isLowerThan } from "../src/decorators/isLowerThan";
// import { isIdentic } from "../src/decorators/isIdentic";
// import { isPassword } from "../src/decorators/isPassword";
// import { ValidationManager } from "../src/core/ValidationManager";
// import { ValidationError } from "../src/errors/ValidationError";

// describe("Validation Library - Full Test Suite", () => {
//   // Classe de test pour valider toutes les fonctionnalités
//   class TestClass {
//     @isRequired()
//     name: string;

//     // @isPositive()
//     // age: number;

//     // @isNegative()
//     // debt: number;

//     // @isValidNbr()
//     // amount: any;

//     // @isValidDate()
//     // birthDate: Date;

//     // @isUpperThan(18)
//     // minimumAge: number;

//     // @isLowerThan(100)
//     // maximumAge: number;

//     // @isIdentic("confirmPassword")
//     // password: string;

//     // @isIdentic("password")
//     // confirmPassword: string;
//     constructor() {
//       this.name = "";
//       // this.age = 0;
//       // this.debt = 0;
//       // this.amount = 0;
//       // this.birthDate = new Date();
//       // this.minimumAge = 0;
//       // this.maximumAge = 0;
//       // this.password = "";
//       // this.confirmPassword = "";
//       // this.securePassword = "";
//     }

//   }

//   let testObject: TestClass;

//   beforeEach(() => {
//     testObject = new TestClass();
//   });

//   it("should return all validation errors", () => {
//     testObject.name = ""; // isRequired
//     // testObject.age = -5; // isPositive
//     // testObject.debt = 10; // isNegative
//     // testObject.amount = "invalid"; // isValidNbr
//     // testObject.birthDate = new Date("invalid-date"); // isValidDate
//     // testObject.minimumAge = 15; // isUpperThan(18)
//     // testObject.maximumAge = 120; // isLowerThan(100)
//     // testObject.password = "Password123!";
//     // testObject.confirmPassword = "DifferentPassword"; // isIdentic

//     try {
//       ValidationManager.validate(testObject);
//     } catch (error) {
//       if (error instanceof ValidationError) {
//         expect(error.errors).toEqual([
//           "The value is null or undefined.",
//           // "The value must be positive.",
//           // "The value must be negative.",
//           // "The value must be a valid number.",
//           // "The value must be a valid date.",
//           // "The value must be greater than 18.",
//           // "The value must be less than 100.",
//           // "The value must match of the field confirmPassword.",
//           // "The value must match of the field password."
//         ]);
//       } else {
//         throw error;
//       }
//     }
//   });

//   // it("should pass all validations", () => {
//   //   // Cas où toutes les validations passent
//   //   testObject.name = "John Doe";
//   //   testObject.age = 30;
//   //   testObject.debt = -100;
//   //   testObject.amount = 500;
//   //   testObject.birthDate = new Date("2024-01-01");
//   //   testObject.minimumAge = 25;
//   //   testObject.maximumAge = 80;
//   //   testObject.password = "Secure123!";
//   //   testObject.confirmPassword = "Secure123!";

//   //   expect(() => ValidationManager.validate(testObject)).not.toThrow();
//   // });
// });










import 'reflect-metadata';
import { MetadataManager } from '../src/core/MetadataManager';
import { isRequired } from '../src/decorators/isRequired';
import { isPositive } from '../src/decorators/isPositive';
import { isValidNumber } from '../src/decorators/isValidNumber';
import { isUpperThan } from '../src/decorators/isUpperThan';
import { ValidationManager } from '../src/core/ValidationManager';
import { ValidationError } from '../src/errors/ValidationError';

// Classe testée avec le décorateur
class TestClass {
  @isRequired
  name: string | undefined;

  @isRequired
  @isPositive
  age: number | undefined;

  @isValidNumber
  @isUpperThan(10)
  n: number = 5;

  constructor(name?: string, age?: number) {
    this.name = name || '';
    this.age = age || undefined;
  }
}

describe('isRequired Decorator', () => {
  // it('should store the validation rules in metadata for decorated properties', () => {
  //   // Vérifier les métadonnées de la propriété `name`
  //   const nameValidators = MetadataManager.getRules(TestClass.prototype, 'name');
  //   expect(nameValidators.length).toBe(1);
  //   expect(nameValidators[0]).toBeDefined();

  //   // Vérifier les métadonnées de la propriété `age`
  //   const ageValidators = MetadataManager.getRules(TestClass.prototype, 'age');
  //   expect(ageValidators.length).toBe(1);
  //   expect(ageValidators[0]).toBeDefined();
  // });

  it('should validate an object and return errors for missing required properties', () => {
    const obj = new TestClass(); // Créé un objet sans valeurs
    expect(() => ValidationManager.validate(obj)).toThrow(ValidationError);

    try {
      ValidationManager.validate(obj);
    } catch (error) {
      if (error instanceof ValidationError) {
        expect(error.errors).toContain("The property 'name' is required but is null, undefined, or empty.");
        expect(error.errors).toContain("The property 'age' is required but is null, undefined, or empty.");
        expect(error.errors).toContain("The value must be a number.");
        expect(error.errors).toContain("The value must be greater than 10.");
      } else {
        throw error; // Renvoyer l'erreur si ce n'est pas une ValidationError
      }
    }
  });

  // it('should not throw errors for valid objects', () => {
  //   const obj = new TestClass('John Doe', 30); // Créé un objet avec des valeurs valides
  //   const errors = ValidationManager.validate(obj);
  //   expect(errors.length).toBe(0);
  // });
});





















