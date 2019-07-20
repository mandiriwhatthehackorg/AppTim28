import React, { Component } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, Alert, Image } from 'react-native';
import Expo, { Constants } from 'expo';
import * as LocalAuthentication from 'expo-local-authentication';
import Loading from '../components/Loading';
import FingerPop from '../components/FingerPop';
import { Grid, Row, Col } from 'react-native-easy-grid';

class Login extends Component {
  state = {
    isLoading: false,
    username: null,
    password: null,
    fingerprints: false,
    compatible: false,
    waitingFingerprint: false,
    result: '',
  };

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.checkDeviceForHardware();
    this.checkForFingerprints();
  }

  checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    this.setState({ compatible });
  };

  checkForFingerprints = async () => {
    let fingerprints = await LocalAuthentication.isEnrolledAsync();
    this.setState({ fingerprints });
  };

  waitingFingerInput = async () => {
    if (this.state.compatible && this.state.fingerprints) {
      await this.scanFinger();
    }
  };

  scanFinger = async () => {
    this.setState({ waitingFingerprint: true });

    let result = await LocalAuthentication.authenticateAsync('Waiting for TouchID');
    if (result.success) {
      ToastAndroid.show('Success !', ToastAndroid.SHORT);
      this.setState({ waitingFingerprint: false });
      this.props.navigation.navigate('Home');
    } else {
      ToastAndroid.show("Echec de l'authentification !", ToastAndroid.SHORT);
      this.setState({ waitingFingerprint: false });
      // await this.scanFinger();
    }
  };

  scanFingerprint = async () => {
    let result = await LocalAuthentication.authenticateAsync('Scan your finger.');
    console.log('Scan Result:', result);
    this.props.navigation.navigate('Home');
  };

  showAndroidAlert = () => {
    Alert.alert('Fingerprint Scan', 'Place your finger over the touch sensor and press scan.', [
      {
        text: 'Scan',
        onPress: () => {
          this.scanFingerprint();
        },
      },
    ]);
  };

  static navigationOptions = {
    header: null,
  };

  renderLoginButton = () => {
    if (this.state.isLoading) {
      return <Loading />;
    } else {
      return (
        // <Row style={{ paddingHorizontal: '10%', alignContent: 'center', justifyContent: 'center' }}>
        <Button
          mode="contained"
          color="#003D79"
          style={{ marginTop: '5%', borderRadius: 4 }}
          onPress={() => {
            this.setState({ isLoading: true });
            this.props.navigation.navigate('Home');
          }}
        >
          Masuk
        </Button>
        // </Row>
      );
    }
  };

  render() {
    return (
      <View>
        <Row style={{ position: 'absolute', alignContent: 'center', justifyContent: 'center' }}>
          <View style={{ width: '40%', height: '40%' }}>
            <Image style={{ resizeMode: 'cover' }} source={require('../assets/open_account.png')} />
          </View>
        </Row>

        {/* <Row style={{ justifyContent: 'center' }}>
          <Row> */}
        <TextInput
          mode="flat"
          style={{ backgroundColor: '#fff', marginTop: '5%' }}
          placeholder="User ID"
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        {/* </Row> */}

        {/* <Row> */}
        {/* <Row style={{ alignContent: 'center', justifyContent: 'center', height: '15%' }}> */}
        <TextInput
          mode="flat"
          style={{ backgroundColor: '#fff', marginTop: '5%' }}
          placeholder="Password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        {/* </Row> */}
        {/* <Row> */}
        {this.renderLoginButton()}
        {/* </Row> */}
        {/* </Row> */}
      </View>
    );
  }
}

export default Login;
