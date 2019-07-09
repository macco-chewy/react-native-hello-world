module.exports = {
  root: true,
  extends: '@react-native-community',
  settings: {
    "import/resolver": {
      "babel-module": {
        "alias": {
          "components": "./src/view/components",
        }
      }
    }
  },
};
