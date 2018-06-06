import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import routes from './routes.js';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started...
        </p>

          <Link to='/'>Route 1</Link>
        
          <Link to='/2'>Route 2</Link>
        
          <Link to='/3'>Route 3</Link>
        
          {routes}
        
      </div>
    );
  }
}

export default App;
