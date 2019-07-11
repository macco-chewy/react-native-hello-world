import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createRootReducer from 'reducers';

const loggerMiddleware = createLogger();

const initialState = {
  global: {
    fetch: {
      active: false,
      lastError: null,
    },
  },
  testFetch: null,
};

// exports
export default function configureStore(preloadedState) {
  // eslint-disable-next-line
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = [
    thunkMiddleware,
    ...(['development', 'local', 'test'].find(e => e === process.env.NODE_ENV)
      ? [loggerMiddleware]
      : []),
  ];
  return createStore(
    createRootReducer(),
    preloadedState,
    composeEnhancer(applyMiddleware(...middleware)),
  );
}

export const store = configureStore(initialState);
