import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Grid, Row } from 'react-native-easy-grid';

class DetailsPromo extends Component {
  state = {};
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Grid>
        <Row>
          <Text>Details Promo </Text>
        </Row>
        <Row>
          <Image source={require('../assets/promoA.jpeg')} />
        </Row>
        <Row>
          <Text>
            Promo A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        </Row>
      </Grid>
    );
  }
}

export default DetailsPromo;
