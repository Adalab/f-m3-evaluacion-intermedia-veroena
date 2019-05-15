import React from 'react';
import PokeList from './components/PokeList';
import Footer from './components/Footer';
import Modal from './components/Modal';

const pokemonArray = [
  {"id":1,"name":"bulbasaur","types":["poison","grass"], "evolution": null, "abilities": ["chlorophyll", "overgrow"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"},
  {"id":2,"name":"ivysaur","types":["poison","grass"], "evolution":"bulbasaur", "abilities": ["chlorophyll", "overgrow"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"},
  {"id":3,"name":"venusaur","types":["poison","grass"], "evolution":"ivysaur", "abilities": ["chlorophyll", "overgrow"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"},
  {"id":4,"name":"charmander","types":["fire"],"evolution":null, "abilities": ["solar-power", "blaze"],"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"},
  {"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander", "abilities": ["solar-power", "blaze"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png"},
  {"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon", "abilities": ["solar-power", "blaze"],"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png"},
  {"id":7,"name":"squirtle","types":["water"],"evolution":null, "abilities": ["rain-dish", "torrent"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png"},
  {"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle", "abilities": ["rain-dish", "torrent"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png"},
  {"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle", "abilities": ["rain-dish", "torrent"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png"},
  {"id":10,"name":"caterpie","types":["bug"],"evolution":null, "abilities": ["run-away", "shield-dust"], "url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png", "urlback":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png"}
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: pokemonArray,
      isModalVisible: false
    }
    this.handleClickFilter = this.handleClickFilter.bind(this);
    this.handleClickBack = this.handleClickBack.bind(this);
    this.handleClickAlert = this.handleClickAlert.bind(this);
    this.handleClickModal = this.handleClickModal.bind(this);
    this.handleClickCloseModal = this.handleClickCloseModal.bind(this);
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

  handleClickAlert() {
    alert(`Please don't hurt the Pokemon. They're a protected species and very friendly.`);
  }

  handleClickModal() {
    this.setState({
      isModalVisible: true
    })
  } 

  handleClickCloseModal() {
    this.setState({
      isModalVisible: false
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
            <PokeList pokemon={this.state.pokemon} handleClickFilter={this.handleClickFilter} handleClickAlert= {this.handleClickAlert} handleClickModal={this.handleClickModal} pokemonArray={pokemonArray} handleClickModalContent={this.handleClickModalContent} />
          </div>
        <Footer handleClickBack={this.handleClickBack}  />
        {this.state.isModalVisible && <Modal handleClickCloseModal={this.handleClickCloseModal} />}

      </div>
    );
  }
}

export default App;
