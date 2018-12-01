import React, { Component } from 'react';
import Authors from './components/authors.js'
import './App.css';

class App extends Component {
  async componentDidMount(){
    const result = await fetch('http://localhost:3000/authors');
    console.log(await result.json());
  }

  render() {
    return (
      <div className="App">
        <Authors/>
      </div>
    );
  }
}

export default App;
