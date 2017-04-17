/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ReactTouchEvents from "react-touch-events";
import Tinder from './Tinder.js';

export default class NativePort extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Tinder swiping
        </Text>
        <Text style={styles.instructions}>
          Some more Text
        </Text>
        <Text style={styles.instructions}>
          Even more Text
        </Text>
        <Tinder style={{flex: 1}} />
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

AppRegistry.registerComponent('NativePort', () => NativePort);
