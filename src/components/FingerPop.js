import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';

class FingerPop extends Component {
  state = {};
  render() {
    return (
      <View>
        <Image source={require('../assets/fingerprint.png')} />
        <Button mode="contained">Tambah</Button>
        <Button mode="outlined">Batal</Button>
      </View>
    );
  }
}

export default FingerPop;
