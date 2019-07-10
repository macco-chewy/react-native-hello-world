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
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          actions: './src/view/actions',
          components: './src/view/components',
          containers: './src/view/containers',
          reducers: './src/reducers',
        },
      },
    },
  },
};
