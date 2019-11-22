import { combineReducers, createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import counter from './reducers/counter';
import movies from './reducers/movies';

const storeFactory = () => {
  const reducers = combineReducers({
    counter,
    movies
  });

  const middlewares = [promiseMiddleware];
  return createStore(reducers, applyMiddleware(...middlewares));
}

export default storeFactory;