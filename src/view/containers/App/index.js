import { createStackNavigator, createAppContainer } from 'react-navigation';

import Config from 'react-native-config';

import Home from 'screens/Home';
import Fetch from 'screens/Fetch';
import Test from 'screens/Test';

console.log(Config.TEST_VAR_1);

const Navigator = createStackNavigator({
  Home: { screen: Home },
  Fetch: { screen: Fetch },
  Test: { screen: Test },
});

const App = createAppContainer(Navigator);

export default App;
