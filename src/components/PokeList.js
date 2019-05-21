import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    const {pokemon, handleClickFilter, handleClickModal, handleClickSpeech, speechId, addFavorites, faveArr} = this.props;
    return(
      <ul className="pokemon__list">
      {pokemon.map((item, index) => 
        <li key={item.id} id={item.id} className="list__item">
          <Pokemon url={item.url} name={item.name} types={item.types} id={item.id} catchphrase={item.catchphrase} handleClickFilter={handleClickFilter} handleClickModal={handleClickModal} handleClickSpeech={handleClickSpeech} speechId={speechId} addFavorites={addFavorites} faveArr={faveArr} />
        </li>  
      )}          
    </ul>
    )
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClickFilter: PropTypes.func.isRequired,
  handleClickSpeech: PropTypes.func.isRequired,
  handleClickModal: PropTypes.func.isRequired,
  speechId: PropTypes.number
}

export default PokeList;
