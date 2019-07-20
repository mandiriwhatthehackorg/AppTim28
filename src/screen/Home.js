import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Col, Grid, Row } from 'react-native-easy-grid';
import { ScrollView } from 'react-native-gesture-handler';
import CardPromo from '../components/CardPromo';
import CardProduct from '../components/CardProduct';

class Home extends Component {
  state = { promo: [], product: [] };
  static navigationOptions = {
    header: null,
  };
  render() {
    for (let i = 0; i < 2; i++) {
      if (i == 0) {
        this.state.promo.push(<CardPromo key={i} id={i} navigation={this.props.navigation} />);
      } else {
        this.state.promo.push(<CardPromo key={i} id={i} navigation={this.props.navigation} />);
      }
    }
    for (let i = 0; i < 2; i++) {
      if (i == 0) {
        this.state.product.push(<CardProduct key={i} id={i} navigation={this.props.navigation} />);
      } else {
        this.state.product.push(<CardProduct key={i} id={i} navigation={this.props.navigation} />);
      }
    }
    return (
      <ScrollView>
        <Row style={{ paddingHorizontal: '10%', paddingVertical: 5 }}>
          <View
            style={{
              width: 300,
              height: 125,
              borderRadius: 4,
              backgroundColor: '#d8d8d8',
            }}
          >
            <Title style={{ padding: '5%' }}>Highlight Promo</Title>
          </View>
        </Row>
        <Row style={{ paddingVertical: 10 }}>
          <Row style={{ marginHorizontal: '5%', color: '#003D79' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#003D79' }}>Promo</Text>
          </Row>
          <Row style={{ paddingHorizontal: 5, justifyContent: 'flex-end' }}>
            <Text
              style={{ color: '#003D79', fontWeight: '100' }}
              onPress={() => {
                this.props.navigation.navigate('PromoList');
              }}
            >
              Liat Semua
            </Text>
          </Row>
        </Row>
        <ScrollView horizontal={true}>{this.state.promo}</ScrollView>
        <Row style={{ paddingVertical: 10 }}>
          <Row style={{ marginHorizontal: '5%', color: '#003D79' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#003D79' }}>Product</Text>
          </Row>
          <Row style={{ paddingHorizontal: 5, justifyContent: 'flex-end' }}>
            <Text
              style={{ color: '#003D79', fontWeight: '200' }}
              onPress={() => {
                this.props.navigation.navigate('PromoList');
              }}
            >
              Liat Semua
            </Text>
          </Row>
        </Row>
        <ScrollView horizontal={true}>{this.state.product}</ScrollView>
      </ScrollView>
    );
  }
}

export default Home;
