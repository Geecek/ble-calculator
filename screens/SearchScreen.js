import React from 'react'
import { View, Text, Platform } from 'react-native'

import TabBarIcon from '../components/TabBarIcon'

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
    ),
  };

  render() {
    return (
      <View>
        <Text style={styles.header}>Connect to your device:</Text>
      </View>
    );
  }
}

const styles = {
  header: {
    color: '#358FF5',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 20
  }
}
