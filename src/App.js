import React from 'react';
import PokeList from './components/PokeList';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { pokemonArray } from './data/appData';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: pokemonArray,
      isModalVisible: false,
      id: null,
      speechId: null,
      faveArr: [],
      isFavoriteVisible: false
    }
    this.handleClickFilter = this.handleClickFilter.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleClickModal = this.handleClickModal.bind(this);
    this.handleClickSpeech = this.handleClickSpeech.bind(this);
    this.addFavorites = this.addFavorites.bind(this);
    this.showFavorites = this.showFavorites.bind(this);
  }

  handleClickFilter(event) {
    const inner = event.currentTarget.innerHTML;
    this.setState(() => {
      const newPokemonArray = pokemonArray.filter(itemPoke => itemPoke.types.includes(inner))
      return {pokemon: newPokemonArray}
    })
  }

  handleClickBack() {
    this.setState({pokemon : pokemonArray});
  }

  handleClickModal(event) {
    const currentId = event.currentTarget.id
    this.setState((prevState)=>{return {isModalVisible : !prevState.isModalVisible, id : parseInt(currentId) }})
  }

  handleClickSpeech(event) {
    const newCollapsibleId = event.currentTarget.getAttribute('data-id');
    this.setState(prevState => {
      if (parseInt(newCollapsibleId) === prevState.speechId) {
        return {speechId: null}
      } else {
        return {speechId: parseInt(newCollapsibleId)}
      }
    })
  }

  addFavorites(event) {
    const faveCurrentId = parseInt(event.currentTarget.id);
    if (!this.state.faveArr.includes(faveCurrentId)) {
      this.setState(prevState => ({
        faveArr: [...prevState.faveArr, faveCurrentId]
      }))
    } else {
      const filteredFaves = this.state.faveArr.filter(item => item !== faveCurrentId);
      this.setState({faveArr: filteredFaves});
    }
  }

  showFavorites () {
    this.setState((prevState)=>{return {isFavoriteVisible : !prevState.isFavoriteVisible}})
  }


  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="page__title">Mi lista de</h1>
          <div className="pokemon__logo"></div>
        </header>
          <div className="wrapper">
            <PokeList pokemon={this.state.pokemon} handleClickFilter={this.handleClickFilter} handleClickModal={this.handleClickModal} handleClickSpeech={this.handleClickSpeech} speechId={this.state.speechId} handleClickFavorites={this.handleClickFavorites} addFavorites={this.addFavorites} faveArr={this.state.faveArr} />
          </div>
        <Footer handleClickBack={this.handleClickBack} faveArr={this.state.faveArr} pokemon={this.state.pokemon} showFavorites={this.showFavorites} isFavoriteVisible={this.state.isFavoriteVisible} />
        {this.state.isModalVisible && <Modal handleClickModal={this.handleClickModal} pokemonId={this.state.id} pokemon={this.state.pokemon} />}

      </div>
    );
  }
}

export default App;
