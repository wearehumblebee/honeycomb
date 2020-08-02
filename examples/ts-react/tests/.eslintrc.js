module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: ['../.eslintrc.js', 'plugin:jest/recommended', 'plugin:jest-dom/recommended'],
  plugins: ['jest', 'jest-dom'],
  rules: {
    'react/display-name': 0,
  },
};
