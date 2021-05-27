module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  env: {
    node: true,
    browser: true,
    commonjs: true,
    amd: true,
  },
  rules: {
    indent: [
      'error',
      2,
    ],
    semi: [
      'error',
      'always',
    ],
    'no-trailing-spaces': 0,
    'keyword-spacing': 0,
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 0,
    'space-before-function-paren': 0,
    'eol-last': 0,
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};