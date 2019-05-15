import React from 'react';
import PropTypes from 'prop-types';

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

class Modal extends React.Component {
  render() {
    const {handleClickCloseModal} = this.props; 
    return (
      <div className="container__modal">
        <div className="modal">
          <div className="modal__content">
            <div className="close__container"><i onClick={handleClickCloseModal} className="fas fa-times"></i></div>
            <h3 className="modal__name">{pokemonArray[0].name}</h3>
            <div className="modal__content--container">
              <img src={pokemonArray[0].url} alt={pokemonArray[0].name} className="pokemon__pic"/>
              <div className="modal__stats">
                <h4 className="modal__types--title">types</h4>
                <ul className="modal__types">
                  {pokemonArray[0].types.map((type, index) =>
                    <li key={index} className="modal__types--item">{type}</li>
                  )}
                </ul>
                <h4 className="modal__abilities--title">abilities</h4>
                <ul className="modal__abilities">
                  {pokemonArray[0].abilities.map((abilities, index) =>
                    <li key={index} className="modal__abilities--item">{abilities}</li>
                  )}
                </ul>
              </div>
              <img src={pokemonArray[0].urlback} alt={pokemonArray[0].name} className="pokemon__back--pic"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  handleClickCloseModal: PropTypes.func.isRequired
}

export default Modal;