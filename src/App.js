import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/PokeList';
import PokeList from './components/PokeList';
import Layout from './components/Layout';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      pokemon: []
    };
    this.loadPokemon = this.loadPokemon.bind(this);
  }

  async loadPokemon() {
    let baseUrl = `https://pokeapi.co/api/v2/`;
    let pokeObj = await fetch(`${baseUrl}pokemon`);
    const json = await pokeObj.json();
    this.setState({ pokemon: json.results });
  }

  componentWillMount() {
    this.loadPokemon();
  }

  render() {
    return (
      <div>
        <PokeList listOfPokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
