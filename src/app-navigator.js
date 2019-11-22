import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/home';
import Catalogue from './screens/catalogue';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Movie Store'
    }
  },
  Catalogue: {
    screen: Catalogue,
    navigationOptions: {
      title: 'Movie Catalogue'
    }
  }
})

export default createAppContainer(AppNavigator);