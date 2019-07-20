import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Col, Grid, Row } from 'react-native-easy-grid';
import CardPromo from '../components/CardPromo';
// import promoData from '../data';

class Product extends Component {
  state = { product: [] };
  static navigationOptions = {
    header: null,
  };
  render() {
    for (let i = 0; i < 4; i++) {
      if (i == 0) {
        this.state.product.push(
          <CardPromo style={{ marginVertical: 15 }} key={i} id={i} navigation={this.props.navigation} />
        );
      } else {
        this.state.product.push(
          <CardPromo style={{ marginVertical: 15 }} key={i} id={i} navigation={this.props.navigation} />
        );
      }
    }
    return <ScrollView>{this.state.product}</ScrollView>;
  }
}

export default Product;
