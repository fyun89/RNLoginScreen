import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../assets/IrvineCompanyLogo.png')}
          style={styles.image}
        />
        <Text style={styles.message}>Welcome!</Text>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
    backgroundColor: '#FFFFFF',
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    bottom: 10,
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});
