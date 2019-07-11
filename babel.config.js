module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.json'],
        alias: {
          Actions: './src/actions',
          api: './src/api',
          components: './src/view/components',
          constants: './src/constants',
          containers: './src/view/containers',
          reducers: './src/reducers',
          store: './src/store',
        },
      },
    ],
  ],
};
