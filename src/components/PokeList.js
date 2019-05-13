import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    const {pokemon, handleClickFilter} = this.props;
    return(
      <ul className="pokemon__list">
      {pokemon.map((item, index) => 
        <li key={index} className="list__item">
          <Pokemon url={item.url} name={item.name} types={item.types} handleClickFilter={handleClickFilter} />
        </li>  
      )}          
    </ul>
    )
  }
}

export default PokeList;

PokeList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object),
}