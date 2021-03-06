module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:flowtype/recommended', 'prettier', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['flowtype', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'camelcase': 'off',
    'no-param-reassign': ["error", { "props": false }],
  },
};
