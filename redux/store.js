import { combineReducers, createStore } from 'redux';
import counter from './reducers/counter';

const storeFactory = () => {
  const reducers = combineReducers({
    counter
  });
  return createStore(reducers);
}

export default storeFactory;