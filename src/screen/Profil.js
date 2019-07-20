import React, { Component } from 'react';
import { View } from 'react-native';
import Loading from '../components/Loading';

class Profil extends Component {
  state = {};
  static navigationOptions = {
    header: null,
  };
  render() {
    return <Loading />;
  }
}

export default Profil;
