module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'plugin:storybook/recommended',
    'prettier',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    JSX: true
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'no-use-before-define': 0,
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 0,
    camelcase: 0,
    semi: [2, 'never'],
  },
}
