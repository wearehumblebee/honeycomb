const path = require('path');

module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  // rules: {
  //   "jsx-a11y/anchor-is-valid": 0,
  //   "jsx-a11y/label-has-for": 0,
  //   "react/destructuring-assignment": 0,
  //   "react/jsx-closing-tag-location": 0,
  //   "react/jsx-one-expression-per-line": 0,
  //   "react/no-access-state-in-setstate": 0,
  //   "react/no-did-mount-set-state": 0,
  //   "react-hooks/rules-of-hooks": "error",
  //   "react-hooks/exhaustive-deps": "warn"
  // }
};
