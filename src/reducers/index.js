import { combineReducers } from 'redux';

import testFetch from 'reducers/testFetch';
import * as globalReducer from './global';

export default () => combineReducers({
  global: combineReducers(globalReducer, {}),
  testFetch,
});
