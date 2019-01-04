import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import CalculatorScreen from '../screens/CalculatorScreen'

import Colors from '../constants/Colors'

const TabNavigator = createBottomTabNavigator(
  {
    Calculator: CalculatorScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
    },
  },
)

export default createAppContainer(TabNavigator)
