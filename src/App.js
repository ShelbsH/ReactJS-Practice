import React, { Component } from 'react';
import NameForm from './Components/Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        My App
        <NameForm />
      </div>
    );
  }
}

export default App;