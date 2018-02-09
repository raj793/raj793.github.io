import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/PokeList';
import PokeList from './components/PokeList';
import Layout from './components/Layout';
import { Pagination } from 'antd';
import Spinner from './components/Spinner';
import PokemonModal from './components/PokemonModal';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      pokemon: [],
      activePage: 0,
      limit: 10,
      offset: 0,
      totalPages: 0,
      spin: true,
      count: 0,
      showModal: false
    };
    this.loadPokemon = this.loadPokemon.bind(this);
    this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.pokemonStartIndexCalculator = this.pokemonStartIndexCalculator.bind(this);
  }

  async loadPokemon(url) {
    this.setState({spin: true});
    let pokeObj = await fetch(url);
    const json = await pokeObj.json();
    let pages = Math.round(json.count / this.state.limit);
    this.setState({ 
      pokemon: json.results,
      totalPages: pages,
      count: json.count,
      spin: false
      });
  }

  pokemonStartIndexCalculator(currentPage, limit) {
      if(currentPage === 0)
      return 1;
      else
      return currentPage === 1 ? 1 : ((currentPage-1)*limit)+1;
  }

  componentWillMount() {
    this.loadPokemon(`${this.props.baseUrl}pokemon?limit=${this.state.limit}&offset=${this.state.offset}`);
  }

  handleModalOpen() {
    this.setState({showModal: true})
  }

  handleModalClose() {
    this.setState({showModal: false})
  }

  handlePaginationSelect(event) {
    let offset = this.state.limit * (event-1);
    this.setState(
      {
        activePage: event
      }
    )
    this.loadPokemon(`${this.props.baseUrl}pokemon?limit=${this.state.limit}&offset=${offset}`);
  }

  handleLimitChange(event) {
    this.setState({
      limit: +event.target.innerHTML || this.state.count
    },
    () => this.loadPokemon(`${this.props.baseUrl}pokemon?limit=${this.state.limit}&offset=0`));
  }

  render() {

    return (
      <div>

        <Layout customCardsList={<PokeList listOfPokemon={this.state.pokemon} 
        pokemonStartIndex={this.pokemonStartIndexCalculator(this.state.activePage, this.state.limit)}/>}/>
        
        <Spinner spin={this.state.spin} />

        <Pagination className="pagination-main"
        hideOnSinglePage={true}
        current={this.state.activePage}
        pageSize={this.state.limit}
        total={this.state.count}
        onChange={this.handlePaginationSelect}
        />

      </div>
    );
  }
}

export default App;