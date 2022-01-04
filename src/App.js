import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
        <Calculator />
    )
 }
}

export default App;
