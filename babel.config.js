module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          actions: './src/view/actions',
          components: './src/view/components',
          containers: './src/view/containers',
          reducers: './src/reducers',
        },
      },
    ],
  ],
};
