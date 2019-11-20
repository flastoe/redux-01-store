import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/master';
import Detail from './screens/detail';

const AppNavigator = createStackNavigator({
  Home,
  Detail
})

export default createAppContainer(AppNavigator);