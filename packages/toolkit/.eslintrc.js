module.exports = {
  extends: ['../../.eslintrc.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      // @see https://github.com/typescript-eslint/typescript-eslint/issues/964
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
