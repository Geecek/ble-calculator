import React, {Component} from 'react'
import {StyleSheet, View, Button, Text} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stack: [],
      buttons: ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '/']
    }
  }
  pushToStack(index) {
    this.setState(({stack, buttons}) => {
      return {
        stack: stack.concat([buttons[index]])
      }
    })
  }
  popFromStack() {
    this.setState(({stack}) => {
      return {
        stack: stack.slice(0, -1)
      }
    })
  }

  render() {return (
      <View style={styles.container}>
        <View style={styles.screen}><Text ellipsizeMode='head' numberOfLines={1} style={styles.equation}>{this.state.stack}</Text></View>
        <View style={styles.row}>
          <View style={styles.button}><Button title="Clear" onPress={() => this.setState(() => ({stack: []}))}></Button></View>
          <View style={styles.button}><Button title="Backspace" onPress={this.popFromStack.bind(this)}></Button></View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}><Button title={this.state.buttons[0]} onPress={this.pushToStack.bind(this, 0)}></Button></View>
          <View style={styles.button}><Button title={this.state.buttons[1]} onPress={this.pushToStack.bind(this, 1)}></Button></View>
          <View style={styles.button}><Button title={this.state.buttons[2]} onPress={this.pushToStack.bind(this, 2)}></Button></View>
          <View style={styles.button}><Button title={this.state.buttons[3]} onPress={this.pushToStack.bind(this, 3)}></Button></View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}><Button title={this.state.buttons[4]} onPress={this.pushToStack.bind(this, 4)}></Button></View>
          <View style={styles.button}><Button title={this.state.buttons[5]} onPress={this.pushToStack.bind(this, 5)}></Button></View>
          <View style={styles.button}><Button title={this.state.buttons[6]} onPress={this.pushToStack.bind(this, 6)}></Button></View>
          <View style={styles.button}><Button title={this.state.buttons[7]} onPress={this.pushToStack.bind(this, 7)}></Button></View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}><Button title={this.state.buttons[8]} onPress={this.pushToStack.bind(this, 8)}></Button></View>
          <View style={styles.button}><Button title={this.state.buttons[9]} onPress={this.pushToStack.bind(this, 9)}></Button></View>
          <View style={styles.button}><Button title={this.state.buttons[10]} onPress={this.pushToStack.bind(this, 10)}></Button></View>
          <View style={styles.button}><Button title={this.state.buttons[11]} onPress={this.pushToStack.bind(this, 11)}></Button></View>
        </View>
        <View style={styles.row}>
          <View style={styles.threeFourthButton}><Button title={this.state.buttons[12]} onPress={this.pushToStack.bind(this, 12)}></Button></View>
          <View style={styles.button}><Button title={this.state.buttons[13]} onPress={this.pushToStack.bind(this, 13)}></Button></View>
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
    flex: 1.5,
    backgroundColor: '#358FF5',
    padding: 20,
    paddingVertical: 30
  },
  equation: {
    color: 'white',
    textAlign: 'right',
    fontSize: 62
  }
})
