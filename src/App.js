import React from 'react';
import Home from './components/Home';
import PokemonDetail from './components/PokemonDetail'
import { pokemonArray } from './data/appData';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: pokemonArray,
      pokemonFilter: pokemonArray,
      isModalVisible: false,
      id: null,
      speechId: null,
      faveArr: JSON.parse(localStorage.getItem('faveArr')) || [],
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
      return {pokemonFilter: newPokemonArray}
    })
  }

  handleClickBack() {
    this.setState({pokemonFilter : pokemonArray});
  }

  handleClickModal(event) {
    const currentId = event.currentTarget.id
    this.setState((prevState)=>{return {isModalVisible : !prevState.isModalVisible, id : parseInt(currentId) -1 }})
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
      }), () => localStorage.setItem('faveArr', JSON.stringify(this.state.faveArr)));
    } else {
      const filteredFaves = this.state.faveArr.filter(item => item !== faveCurrentId);
      this.setState({faveArr: filteredFaves},  () => localStorage.setItem('faveArr', JSON.stringify(this.state.faveArr)))
    }
  }


  showFavorites () {
    this.setState((prevState)=>{return {isFavoriteVisible : !prevState.isFavoriteVisible}})
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (<Home  
            pokemonFilter={this.state.pokemonFilter}
            pokemon={this.state.pokemon}
            pokemonId={this.state.id}
            handleClickFilter={this.handleClickFilter}
            handleClickModal={this.handleClickModal} 
            handleClickSpeech={this.handleClickSpeech}
            speechId={this.state.speechId}
            handleClickFavorites={this.handleClickFavorites}
            addFavorites={this.addFavorites}
            faveArr={this.state.faveArr}
            handleClickBack={this.handleClickBack}
            showFavorites={this.showFavorites}
            isFavoriteVisible={this.state.isFavoriteVisible}
            isModalVisible={this.state.isModalVisible} />) }
          />
          <Route path="/child/:ID" render={props => (<PokemonDetail
            match={props.match}
            pokemon={this.state.pokemon}
          />)} />
        </Switch>
      </div>
    );
  }
}

export default App;
