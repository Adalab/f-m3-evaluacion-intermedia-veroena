import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    const {handleClickModal, pokemonId, pokemon} = this.props; 
    return (
      <div className="container__modal">
        <div className="modal">
          <div className="modal__content">
            <div className="close__container"><i onClick={handleClickModal} className="fas fa-times"></i></div>
            <h3 className="modal__name">{pokemon[pokemonId].name}</h3>
            <div className="modal__content--container">
              <img src={pokemon[pokemonId].url} alt={pokemon[pokemonId].name} className="pokemon__pic"/>
              <div className="modal__stats">
                <h4 className="modal__types--title">types</h4>
                <ul className="modal__types">
                  {pokemon[pokemonId].types.map((type, index) =>
                    <li key={index} className="modal__types--item">{type}</li>
                  )}
                </ul>
                <h4 className="modal__abilities--title">abilities</h4>
                <ul className="modal__abilities">
                  {pokemon[pokemonId].abilities.map((abilities, index) =>
                    <li key={index} className="modal__abilities--item">{abilities}</li>
                  )}
                </ul>
              </div>
              <img src={pokemon[pokemonId].urlback} alt={pokemon[pokemonId].name} className="pokemon__back--pic"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  handleClickModal: PropTypes.func.isRequired
}

export default Modal;