import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, TextInput, View} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          style={styles.usernameInput}
        />
        <TextInput
          placeholder="Password"
          style={styles.passwordInput}
          secureTextEntry
        />
        <TouchableOpacity
          title="Login"
          accessibilityLabel="Click to login to your account"
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 250,
    height: 100,
    
  },
  usernameInput: {
    backgroundColor: 'rgba(211,211,211,0.5)',
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 25,
  },
  passwordInput: {
    backgroundColor: 'rgba(211,211,211,0.5)',
    fontSize: 25,
    paddingHorizontal: 10,
  },
  loginButton: {
    marginTop: 20,
    alignItems: 'center',
    width: 250,
    height: 40,
    backgroundColor: 'rgba(255,32,21,1)',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    textAlignVertical: 'center',
  }
});
