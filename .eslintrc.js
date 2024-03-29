module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // cannot make it work with subfolders tsconfig path mapping at the moment
    // 'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: ['node_modules/**/*'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['@emotion', 'prettier'],
  settings: {
    // 'import/extensions': ['.ts', '.tsx', '.d.s', '.js', '.jsx', '.json'],
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx'],
    // },
    // 'import/resolvers': {
    //   // typescript: {}
    //   typescript: {
    //     // always try to resolve types under `<roo/>@types` directory even it doesn't contain any source code, like `@types/unist`
    //     alwaysTryTypes: true,
    //     directory: [
    //       './tsconfig.json',
    //       './examples/*/tsconfig.json',
    //       './packages/*/tsconfig.json',
    //     ],
    //   }
    // }
  },
  rules: {
    '@emotion/jsx-import': 'error',
    '@emotion/pkg-renaming': 'error',
    // disable the rule for all files by default
    // @see https://github.com/typescript-eslint/typescript-eslint/issues/964
    '@typescript-eslint/explicit-function-return-type': 'off',
    // Generic rules
    'func-names': ['error', 'never'],
    // cannot make it work with subfolders tsconfig path mapping at the moment
    // 'import/no-unresolved': [2, { caseSensitive: true, commonjs: true }],
    'prefer-destructuring': 0,
  },
  overrides: [
    {
      // config specific to TypeScript files
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        // @see https://github.com/typescript-eslint/typescript-eslint/issues/964
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
    {
      // config specific to MDX files
      files: ['*.mdx'],
      extends: ['plugin:mdx/recommended'],
    },
  ],
};
