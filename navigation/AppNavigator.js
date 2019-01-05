import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import { Platform } from 'react-native'

import CalculatorScreen from '../screens/CalculatorScreen'
import SearchScreen from '../screens/SearchScreen'

import Colors from '../constants/Colors'
import TabBarIcon from '../components/TabBarIcon'

const TabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: () => (<SearchScreen />),
      navigationOptions: {
        title: 'Search',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
        )
      }
    },
    Calculator: {
      screen: () => (<CalculatorScreen />),
      navigationOptions: {
        title: 'Calculator',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-calculator' : 'md-calculator'} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
    },
  },
)

export default createAppContainer(TabNavigator)
