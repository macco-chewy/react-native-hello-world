import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from 'containers/App';
import configureStore from 'store';
import { name as appName } from './app.json';

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
