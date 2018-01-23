import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.loadPokemon = this.loadPokemon.bind(this);
  }

  async loadPokemon() {
    let baseUrl = `https://pokeapi.co/api/v2/`;
    let pokeObj = await fetch(`${baseUrl}pokemon`);
    const json = await pokeObj.json();
    console.log(json);
  }

  componentWillMount() {
    this.loadPokemon();
  }

  tile(){
    return(
      <div>
        
      </div>
    )
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
