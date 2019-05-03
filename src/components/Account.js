import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class Account extends Component {

  render() {
    return (
      <View style={styles.account}>
        <Text>Welcome! You have logged in!</Text>
        <TouchableOpacity
          title="Logout"
          accessibilityLabel="Click to log out of your account"
          style={styles.loginButton}
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.loginButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  account: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'rgba(255,32,21,1)',
  }
});
