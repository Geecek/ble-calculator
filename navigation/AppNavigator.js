import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import CalculatorScreen from '../screens/CalculatorScreen'
import SearchScreen from '../screens/SearchScreen'

import Colors from '../constants/Colors'

const TabNavigator = createBottomTabNavigator(
  {
    Search: SearchScreen,
    Calculator: CalculatorScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
    },
  },
)

export default createAppContainer(TabNavigator)
