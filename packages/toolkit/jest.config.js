// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest/utils');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.(js|jsx|ts|tsx)', '!**/*.test.*', '!**/*.d.ts'],
  coverageDirectory: '<rootDir>/reports/coverage',
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/src/cli.ts'],
  coverageReporters: ['lcov', 'text'],
  displayName: 'unit',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  rootDir: './',
  testMatch: ['<rootDir>/tests/**/*.test.(js|jsx|ts|tsx)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
