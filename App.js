import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/components/Login';
import Splash from './src/components/Splash';

export default class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}
