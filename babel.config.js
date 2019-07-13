module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
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
    ],
  ],
};
