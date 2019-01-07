import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

import { Platform } from 'react-native'

import CalculatorScreen from '../screens/CalculatorScreen'
import SearchScreen from '../screens/SearchScreen'

import Colors from '../constants/Colors'
import TabBarIcon from '../components/TabBarIcon'

connectedDevice = null

_setConnectedDevice = (device) => {
  console.warn(`connected to a new device: ${device.name}`)
  this.connectedDevice = device
}

_writeCharacteristicToDevice = (characteristic) => {
  // console.warn(`sending: ${characteristic}`)
  this.connectedDevice
    .discoverAllServicesAndCharacteristics()
    .then((device) => {
      device.writeCharacteristicWithResponseForService('0000FFE0-0000-1000-8000-00805F9B34FB', '0000FFE1-0000-1000-8000-00805F9B34FB', characteristic)
      .then((characteristic) => {
        // console.warn('Wyslalem charakterystyke')
        // console.warn(Object.keys(characteristic))
        // console.warn(Object.entries(characteristic))
      })
      .catch((error) => {
        console.warn('error: ', error)
      })
      // console.warn(Object.keys(device))
    })
    .catch((error) => {
      console.warn(error)
    })
}

const TabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: () => (
        <SearchScreen 
          setConnectedDevice={this._setConnectedDevice.bind(this)}
        />
      ),
      navigationOptions: {
        title: 'Search',
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
        )
      }
    },
    Calculator: {
      screen: () => (<CalculatorScreen writeCharacteristicToDevice={this._writeCharacteristicToDevice} />),
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
