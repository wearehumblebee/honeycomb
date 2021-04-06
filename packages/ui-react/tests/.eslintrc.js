module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: ['../.eslintrc.js', 'plugin:jest/recommended', 'plugin:jest-dom/recommended'],
  plugins: ['jest', 'jest-dom'],
  rules: {
    'react/display-name': 0,
    // using automatic JSX pragma: no need to lint those any longer
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
