import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/PokeList';
import PokeList from './components/PokeList';
import Layout from './components/Layout';
import { Col } from 'react-bootstrap';
import { Pagination } from 'antd';
import Spinner from './components/Spinner';
import SelectItemsPerPageButtons from './components/SelectItemsPerPageButtons';
import PokemonModal from './components/PokemonModal';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      pokemon: [],
      activePage: 0,
      limit: 15,
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
  }

  async loadPokemon(url) {
    this.setState({spin: true});
    let pokeObj = await fetch(url);
    const json = await pokeObj.json();
    let pages = Math.round(json.count / this.state.limit);
    this.setState({ 
      pokemon: json.results,
      totalPages: pages,
      count: json.count-1,
      spin: false
      });
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
    let offset = this.state.limit * event;
    if(event === 1)
    offset = 0;
    this.loadPokemon(`${this.props.baseUrl}pokemon?limit=${this.state.limit}&offset=${offset}`);
  }

  handleLimitChange(event) {
    this.setState({
      limit: +event.target.innerHTML || this.state.count
    },
    () => this.loadPokemon(`${this.props.baseUrl}pokemon?limit=${this.state.limit}&offset=0`));
  }
  //<SelectItemsPerPageButtons options={[10,50,100,200]} selectedValue={this.state.limit} 
  //allValue={this.state.count} onOptionSelected={this.handleLimitChange} />

  render() {
    return (
      <div>
        <Layout />
        <Spinner spin={this.state.spin} />
        
        <Col sm={8} md={10} smOffset={2} mdOffset={1}>
        <PokeList listOfPokemon={this.state.pokemon} openModal={this.handleModalOpen} className="PokeList" />
        </Col>
        <div className="pagination-main">
          <Pagination
          total = {this.state.count}
          onChange = {this.handlePaginationSelect}
          curent = {this.state.activePage}
          pageSize = {this.state.limit}
          hideOnSinglePage = {true}
            />
            <PokemonModal closeModal={this.handleModalClose} showModal={this.state.showModal} />
          </div>
      </div>
    );
  }
}

export default App;
