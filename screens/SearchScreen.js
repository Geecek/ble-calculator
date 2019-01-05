import React from 'react'
import { View, Text } from 'react-native'
import { BleManager } from 'react-native-ble-plx'

import List from '../components/List'

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props)
    this.manager = new BleManager()
    this.state = {
      devices: []
    }
  }

  componentWillMount() {
    const subscription = this.manager.onStateChange((state) => {
      if (state === 'PoweredOn') {
        this.scanAndAdd()
        subscription.remove()
      }
    }, true)
  }

  async _connectToDevice(name) {
    console.warn('chce sie polaczyc z ', name)
    const connectedDevice = await this.state.devices.filter(device => device.name === name)[0].connect()
    this.props.setConnectedDevice(connectedDevice)
  }

  scanAndAdd() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.warn(error)
        return
      }
      if (this.state.devices.map(el => el.name).includes(device.name)) {
        return
      }
      this.setState(({devices}) => {
        return {devices: devices.concat([device])}
      })
    })
  } 

  render() {
    return (
      <View>
        <Text style={styles.header}>Connect to your device:</Text>
        <List items={this.state.devices} connectToDevice={this._connectToDevice.bind(this)}/>
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
