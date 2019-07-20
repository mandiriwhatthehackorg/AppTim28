import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import CardPromo from '../components/CardPromo';
// import promoData from '../data';

class Promo extends Component {
  state = { promo: [] };
  static navigationOptions = {
    header: null,
  };
  render() {
    for (let i = 0; i < 5; i++) {
      if (i == 0) {
        this.state.promo.push(
          <CardPromo style={{ marginVertical: 15 }} key={i} id={i} navigation={this.props.navigation} />
        );
      } else {
        this.state.promo.push(
          <CardPromo style={{ marginVertical: 15 }} key={i} id={i} navigation={this.props.navigation} />
        );
      }
    }
    return <ScrollView>{this.state.promo}</ScrollView>;
  }
}

export default Promo;
