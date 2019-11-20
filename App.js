import React from 'react';
import { Provider } from 'react-redux';
import storeFactory from './redux/store';
import AppNavigator from './src/app-navigator';

const store = storeFactory();

export default () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)
