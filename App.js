import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/components/Login';
import Account from './src/components/Account';
import Splash from './src/components/Splash';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedin: false,
    }
    this.updateStatus = this.updateStatus.bind(this);
  }

  updateStatus() {
    const status = this.state.loggedin;
    console.log('updateStatus triggered', status)
    if (!status) {
      this.setState({loggedin: true});
    } else {
      this.setState({loggedin: false});
    }
  }

  render() {
    const status = this.state.loggedin;
    return (
      status ? <Account updateStatus={() => this.updateStatus()}/> : <Login updateStatus={() => this.updateStatus()}/>
    );
  }
}
