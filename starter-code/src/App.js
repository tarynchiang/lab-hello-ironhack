import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main  from './components/Main';

class App extends Component {

  render(){
  return (
    <div className='whole-page'>
        <h1>Intro to React.js</h1>
        
      <Main />

    </div>
  );
  }
}

export default App;
