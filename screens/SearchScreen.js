import React from 'react'
import { View, Text } from 'react-native'
import { BleManager } from 'react-native-ble-plx'

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props)
    this.manager = new BleManager()
  }

  componentWillMount() {
    const subscription = this.manager.onStateChange((state) => {
      if (state === 'PoweredOn') {
        this.scanAndConnect()
        subscription.remove()
      }
    }, true)
  }

  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.warn(error)
        return
      }
      // console.warn(`Device: ${device.id}, ${device.name}, isConnectable: ${device.isConnectable}`)
      // console.warn(Object.keys(device))
      if (device.name === 'Koncowka') {
        console.warn('Znalazlem twoj modul')
        device.connect()
          .then((device) => {
            return device.discoverAllServicesAndCharacteristics()
          })
          .then((device) => {
            device.writeCharacteristicWithResponseForService('0000FFE0-0000-1000-8000-00805F9B34FB', '0000FFE1-0000-1000-8000-00805F9B34FB', 'Mg==')
            .then((characteristic) => {
              console.warn('Wyslalem charakterystyke')
              console.warn(Object.keys(characteristic))
              console.warn(Object.entries(characteristic))
            })
            .catch((error) => {
              console.warn('error: ', error)
            })
            console.warn(Object.keys(device))
          })
          .catch((error) => {
            console.warn(error)
          })
      }
    });
  }

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
