/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/unitest/**/*.(spec|test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'js'],
  clearMocks: true, // N
};

export default config;
