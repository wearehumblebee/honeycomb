// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest/utils');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.(js|jsx|ts|tsx)', '!*.test.*'],
  coverageDirectory: '<rootDir>/reports/coverage',
  coveragePathIgnorePatterns: [
    // the root index is what we mock in test utils
    '<rootDir>/src/index.tsx',
  ],
  coverageReporters: ['lcov', 'text'],
  displayName: 'unit',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  reporters: [
    'default',
    // IMPORTANT: reporter options are not available in CLI!
    // https://jestjs.io/docs/en/cli#--reporters
    [
      'jest-junit',
      {
        suiteName: 'Unit tests',
        outputDirectory: './reports',
        outputName: 'unit-tests.xml',
      },
    ],
  ],
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testMatch: ['<rootDir>/tests/**/*.test.(js|jsx|ts|tsx)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
};
