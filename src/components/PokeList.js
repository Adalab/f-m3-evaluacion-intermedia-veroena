import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    const {pokemon, handleClickFilter, handleClickAlert} = this.props;
    return(
      <ul className="pokemon__list">
      {pokemon.map((item) => 
        <li key={item.id} className="list__item">
          <Pokemon url={item.url} name={item.name} types={item.types} handleClickFilter={handleClickFilter} handleClickAlert={handleClickAlert} />
        </li>  
      )}          
    </ul>
    )
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object),
}

export default PokeList;
