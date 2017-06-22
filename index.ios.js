/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import './global';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Wallet from './src/wallet';

export default class react_native_ethereumjs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Private key:
        </Text>
        <Text style={styles.instructions}>
          {Wallet()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('react_native_ethereumjs', () => react_native_ethereumjs);
