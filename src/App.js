import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './4.boiling_verdict/index';
import {WelcomeDialog,ChatApp,Dialog} from './5.composition/index';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ChatApp />
      </React.Fragment>
      
    );
  }
}

export default App;
