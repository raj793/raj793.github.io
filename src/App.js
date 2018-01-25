import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/PokeList';
import PokeList from './components/PokeList';
import Layout from './components/Layout';
import { Col } from 'react-bootstrap';
import { Pagination } from 'antd';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      pokemon: [],
      activePage: 0,
      limit: 9,
      offset: 0,
      totalPages: 0
    };
    this.loadPokemon = this.loadPokemon.bind(this);
    this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
  }

  async loadPokemon(url) {
    let pokeObj = await fetch(url);
    const json = await pokeObj.json();
    let pages = Math.round(json.count / this.state.limit);
    this.setState({ 
      pokemon: json.results,
      totalPages: pages,
      count: json.count
      });
  }

  componentWillMount() {
    this.loadPokemon(`${this.props.baseUrl}pokemon?limit=${this.state.limit}&offset=${this.state.offset}`);
  }

  handlePaginationSelect(event) {

    let offset = this.state.limit * event;
    this.loadPokemon(`${this.props.baseUrl}pokemon?limit=${this.state.limit}&offset=${offset}`)
  }

  render() {
    return (
      <div>
        <Layout />
        <Col sm={8} md={10} smOffset={2} mdOffset={1}>
        <PokeList listOfPokemon={this.state.pokemon} />
        </Col>
        <div className="pagination-main">
          <Pagination
          total = {this.state.totalPages}
          onChange = {this.handlePaginationSelect}
          curent = {this.state.activePage}
          pageSize = {this.state.limit}
            />
          </div>
      </div>
    );
  }
}

export default App;
