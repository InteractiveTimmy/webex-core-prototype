module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'jest',
    'jsdoc',
    'eslint-plugin-tsdoc',
  ],
  rules: {
    'function-paren-newline': 'off',
    'jest/prefer-lowercase-title': 'off',
    'jest/require-hook': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'jsdoc/check-property-names': 'warn',
    'jsdoc/newline-after-description': 'warn',
    'jsdoc/no-multi-asterisks': 'warn',
    'jsdoc/require-jsdoc': 'warn',
    'jsdoc/require-description': 'warn',
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
    'jsdoc/require-param': 'warn',
    'jsdoc/require-param-description': 'warn',
    'jsdoc/require-param-name': 'warn',
    'jsdoc/require-property': 'warn',
    'jsdoc/require-property-description': 'warn',
    'jsdoc/require-property-name': 'warn',
    'jsdoc/require-returns': 'warn',
    'jsdoc/require-returns-check': 'warn',
    'jsdoc/require-returns-description': 'warn',
    'jsdoc/require-throws': 'warn',
    'jsdoc/require-yields': 'warn',
    'jsdoc/require-yields-check': 'warn',
    'object-curly-newline': 'off',
    'tsdoc/syntax': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
};
