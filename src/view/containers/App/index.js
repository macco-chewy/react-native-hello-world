import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from 'screens/Home';
import Fetch from 'screens/Fetch';
import Test from 'screens/Test';

const Navigator = createStackNavigator({
  Home: { screen: Home },
  Fetch: { screen: Fetch },
  Test: { screen: Test },
});

const App = createAppContainer(Navigator);

export default App;
