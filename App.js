import React, {Component} from 'react';
import Login from './src/components/Login';
import Account from './src/components/Account';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedin: false,
    };
    this.updateStatus = this.updateStatus.bind(this);
  }

  updateStatus() {
    const { loggedin } = this.state;
    console.log('updateStatus triggered', loggedin)
    if (!loggedin) {
      this.setState({loggedin: true});
    } else {
      this.setState({loggedin: false});
    }
  }

  render() {
    const { loggedin } = this.state;
    return (
      loggedin ? <Account updateStatus={() => this.updateStatus()}/> : <Login updateStatus={() => this.updateStatus()}/>
    );
  }
};
