module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': ['off', { singleQuote: true }],
    'react/function-component-definition': ['off', { singleQuote: true }],
    'arrow-body-style': ['off', { singleQuote: true }],
    'linebreak-style': ['off', { singleQuote: true }],
    'react/jsx-indent': ['off', { singleQuote: true }],
    'eol-last': ['off', { singleQuote: true }],
    'react/jsx-filename-extension': ['off', { singleQuote: true }],
    'react-native/no-inline-styles': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'no-use-before-define': 'off',
    'no-trailing-spaces': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    indent: ['off', { singleQuote: true }],
  },
};
