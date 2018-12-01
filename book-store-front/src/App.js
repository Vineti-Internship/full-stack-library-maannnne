import React, { Component } from 'react';
import Authors from './components/authors.js'
import './App.css';
import {ThemeContext, themes} from './components/context'

class App extends Component {
  state = {
    theme: themes.dark,
  }

  async componentDidMount(){
    const result = await fetch('http://localhost:3000/authors');
    console.log(await result.json());
  }


  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Authors/>
      </ThemeContext.Provider>
    );
  }
}
export default App;
