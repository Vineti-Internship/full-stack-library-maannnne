import React, { Component } from 'react';
import Authors from './components/authors.js'
import Books from './components/books.js'
import './App.css';
import {ThemeContext, themes} from './components/context'

class App extends Component {
  state = {
    theme: themes.dark,
  }

  async componentDidMount(){
    const result = await Promise([
      fetch('http://localhost:3000/authors'),
      fetch('http://localhost:3000/books')
    ])
    console.log(await result.json());   
  }


  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Authors/>
        <Books/>
      </ThemeContext.Provider>
    );
  }
}
export default App;
