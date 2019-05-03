import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('handle submit')
    fetch('http://localhost:8000/', {
      method: 'POST',
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password,
      })
    })
    .then((res) => res.json())
    .then((res) => {
      console.log('res', res)
      if (res.data === "accepted") {
        Alert.alert('You have successfully logged in')
        this.props.updateStatus()
      } else if (res.data === "locked") {
        Alert.alert('Too many incorrect login attempts! Please wait 5 seconds until retry.')
      } else if (res.data === "rejected") {
        Alert.alert('Please check your credentials again.')
      }
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          style={styles.usernameInput}
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          placeholder="Password"
          style={styles.passwordInput}
          secureTextEntry
          onChangeText={(password) => this.setState({password})}
        />
        <TouchableOpacity
          title="Login"
          accessibilityLabel="Click to login to your account"
          style={styles.loginButton}
          onPress={() => this.handleSubmit()}
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
