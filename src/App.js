import React, { Component } from 'react';
import logo from './logo.svg';
import Try from './components/justatry';
import Clock from './components/Clock';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App App-header">
       <Try />
        <img src={logo} className="App-logo" alt="logo" />
          <div id="root">
            <Clock />
          </div>
      </div>
    );
  }
}

export default App;
