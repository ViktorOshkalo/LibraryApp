import React, { Component } from 'react';
import logo from './Closed_Book_Icon.svg';
import './App.css';

import {library} from './data/data.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my LibraryApp</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. And fuck off with {library.books[0].title}
        </p>
      </div>
    );
  }
}

export default App;
