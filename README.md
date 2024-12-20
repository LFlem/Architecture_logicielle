# Validation Library

A TypeScript validation library inspired by class-validator, providing decorators for object validation.

## Features

- Property decorators for validation
- Custom validation rules
- Easy to extend
- Full TypeScript support
- Comprehensive test coverage

## Installation

Install the library using npm:

```bash
npm install validation-library
```

## Quick Start

Import the decorators and validation function:

```typescript
import { isRequired, isPositive, validate } from 'validation-library';

class Product {
  @isRequired()
  name: string;

  @isPositive()
  @isRequired()
  price: number;
}

const product = new Product();
product.name = "Coffee";
product.price = 5.99;

try {
  validate(product);
  console.log("Validation passed!");
} catch (error) {
  console.error(error.errors);
}
```

## Available Validators

- `@isRequired()` - Ensures value is not null/undefined/empty
- `@isPositive()` - Validates positive numbers
- `@isNegative()` - Validates negative numbers
- `@isValidNumber()` - Validates numeric values
- `@isValidDate()` - Validates Date objects
- `@isUpperThan(ref)` - Validates value greater than reference
- `@isLowerThan(ref)` - Validates value less than reference
- `@isIdentic(field)` - Validates matching field values
- `@isPassword(options)` - Validates password requirements

## Password Validation Options

The `@isPassword` decorator supports customizable options:

```typescript
class User {
  @isPassword({
    minLength: 8,
    maxLength: 20,
    requireUppercase: true,
    requireLowercase: true,
    requireNumber: true,
    requireSpecialChar: true,
    noSpaces: true
  })
  password: string;
}
```

## Custom Validators

You can create custom validators by implementing the `Validator` interface:

```typescript
import { Validator } from 'validation-library';

export class CustomValidator implements Validator {
  validate(value: any): string[] {
    // Your validation logic
    return []; // Return an array of error messages if validation fails
  }
}
```

## API Documentation

### Core Functions

- `validate(object)` - Validates an object against its decorators

### Decorators

All decorators are property decorators and can be combined:

```typescript
class Example {
  @isRequired()
  @isPositive()
  value: number;
}
```

## Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## Project Structure

The project is organized as follows:

```
src/
├── core/               # Core validation logic
├── decorators/         # Validation decorators
├── validators/         # Validator implementations
└── errors/             # Custom error types
```

## Contributions

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

