import React from 'react';
import PokeList from './components/PokeList';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { pokemonArray } from './data/appData';

// const pokemonArray = [
//   {"id":1,"name":"bulbasaur","types":["poison","grass"], "evolution": null, "abilities": ["chlorophyll", "overgrow"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", "catchphrase": "Saur! Bulbasaur!"},
//   {"id":2,"name":"ivysaur","types":["poison","grass"], "evolution":"bulbasaur", "abilities": ["chlorophyll", "overgrow"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png", "catchphrase": "IVYsaur!"},
//   {"id":3,"name":"venusaur","types":["poison","grass"], "evolution":"ivysaur", "abilities": ["chlorophyll", "overgrow"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png", "catchphrase": "Rrrhhhagghhh!"},
//   {"id":4,"name":"charmander","types":["fire"],"evolution":null, "abilities": ["solar-power", "blaze"],"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png", "catchphrase": "Char! Charmander!"},
//   {"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander", "abilities": ["solar-power", "blaze"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png", "catchphrase": "Charrgghh!"},
//   {"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon", "abilities": ["solar-power", "blaze"],"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png", "catchphrase": "Garrgghhhh!"},
//   {"id":7,"name":"squirtle","types":["water"],"evolution":null, "abilities": ["rain-dish", "torrent"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png", "catchphrase": "Squirtle! Squirtle!"},
//   {"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle", "abilities": ["rain-dish", "torrent"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png", "catchphrase": "War! War! Wartortle!"},
//   {"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle", "abilities": ["rain-dish", "torrent"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png", "catchphrase": "Raarrggghhhh!"},
//   {"id":10,"name":"caterpie","types":["bug"],"evolution":null, "abilities": ["run-away", "shield-dust"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png", "catchphrase": "CaterpIE!"}
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: pokemonArray,
      isModalVisible: false,
      isSpeechVisible: false,
      id: 0,
      speechId: null
    }
    this.handleClickFilter = this.handleClickFilter.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleClickModal = this.handleClickModal.bind(this);
    this.handleClickSpeech = this.handleClickSpeech.bind(this);
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
    // const currentSpeechId = event.currentTarget.id;
    // this.setState((prevState)=>{return {isSpeechVisible : !prevState.isSpeechVisible, speechId : parseInt(currentSpeechId) -1 }})
    const newCollapsibleId = event.currentTarget.getAttribute('data-id');
    this.setState(prevState => {
      if (parseInt(newCollapsibleId) === prevState.speechId) {
        return {speechId: null}
      } else {
        return {speechId: parseInt(newCollapsibleId)}
      }
    })
  }


  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="page__title">Mi lista de</h1>
          <div className="pokemon__logo"></div>
        </header>
          <div className="wrapper">
            <PokeList pokemon={this.state.pokemon} handleClickFilter={this.handleClickFilter} handleClickAlert= {this.handleClickAlert} handleClickModal={this.handleClickModal} pokemonArray={pokemonArray} isSpeechVisible={this.state.isSpeechVisible} handleClickSpeech={this.handleClickSpeech} speechId={this.state.speechId} />
          </div>
        <Footer handleClickBack={this.handleClickBack}  />
        {this.state.isModalVisible && <Modal handleClickModal={this.handleClickModal} pokemonId={this.state.id} pokemon={this.state.pokemon} />}

      </div>
    );
  }
}

export default App;
