import React, { Component } from 'react';
import { View, Card, StyleSheet, TouchableOpacity, Image } from 'react-native';

class CardPromo extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('DetailsPromo');
        }}
      >
        <View style={styles.rectangle}>
          <Image
            style={styles.rect}
            source={this.props.id == 1 ? require('../assets/promoA.jpeg') : require('../assets/promoB.jpeg')}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  rectangle: {
    width: 285,
    height: 200,
    borderRadius: 6.2,
    borderStyle: 'solid',
    borderWidth: 1.4,
    marginHorizontal: 10,
  },
  rect: {
    width: 285,
    height: 100,
    borderRadius: 6.2,
    borderWidth: 1.4,
  },
});
export default CardPromo;
