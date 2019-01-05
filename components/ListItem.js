import React from 'react'
import { View, Text, Button } from 'react-native'

import Colors from '../constants/Colors'

export default function ListItem({ connectToDevice, name }) {
  return ( 
    <View style={styles.item}>
      <View style={styles.title}>
        <Text style={styles.title}>{ name }</Text>
      </View>
      <View style={styles.btn}>
        <Button onPress={() => connectToDevice(name)} title={'Connect'} />
      </View>
    </View>
  )
}

const styles = {
  item: {
    marginTop: 30,
    padding: 13,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    color: Colors.tintColor,
    flex: 2
  },
  btn: {
    flex: 1
  }
}
