import React, {Component} from 'react'
import {StyleSheet, View, Button} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.screen}></View>
        <View style={styles.row}>
          <View style={styles.button}><Button title="Clear"></Button></View>
          <View style={styles.button}><Button title="Backspace"></Button></View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}><Button title="7"></Button></View>
          <View style={styles.button}><Button title="8"></Button></View>
          <View style={styles.button}><Button title="9"></Button></View>
          <View style={styles.button}><Button title="+"></Button></View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}><Button title="4"></Button></View>
          <View style={styles.button}><Button title="5"></Button></View>
          <View style={styles.button}><Button title="6"></Button></View>
          <View style={styles.button}><Button title="-"></Button></View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}><Button title="1"></Button></View>
          <View style={styles.button}><Button title="2"></Button></View>
          <View style={styles.button}><Button title="3"></Button></View>
          <View style={styles.button}><Button title="*"></Button></View>
        </View>
        <View style={styles.row}>
          <View style={styles.threeFourthButton}><Button title="0"></Button></View>
          <View style={styles.button}><Button title="/"></Button></View>
        </View>
        <View style={styles.button}>
          <View><Button title="="></Button></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    margin: 10
  },
  threeFourthButton: {
    flex: 3.5,
    margin: 10
  },
  screen: {
    flex: 2,
    backgroundColor: 'steelblue'
  }
})
