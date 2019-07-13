module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'jsx-a11y', 'import', 'jest'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          Actions: './src/actions',
          api: './src/api',
          components: './src/view/components',
          constants: './src/constants',
          containers: './src/view/containers',
          reducers: './src/reducers',
          screens: './src/view/screens',
          store: './src/store',
        },
      },
    },
  },
};
