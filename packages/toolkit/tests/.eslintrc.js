module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: ['../.eslintrc.js', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'react/display-name': 0,
  },
};
