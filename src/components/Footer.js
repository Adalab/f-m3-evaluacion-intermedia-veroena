import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const {handleClickBack, faveArr, pokemon, showFavorites, isFavoriteVisible} = props;
  return (
    <footer className="footer">
    <div className="favorites">
      <h3 onClick={showFavorites} className="favorites__title">Mis favoritos</h3>
      {isFavoriteVisible && 
        <ul className="favorites__list">
          {faveArr.length !== 0 ? 
          faveArr.map(item => 
            <li className="favorites__list--item" key={pokemon[item -1].id}>
              <img src={pokemon[item -1].url} alt={pokemon[item -1].name} />
            </li>
          )
          :
          ''
          }
        </ul>
      }
    </div>
    <button onClick={handleClickBack} className="pokeball"><img src="https://img.icons8.com/color/50/000000/pokeball.png" alt="pokeball"></img>Back</button>
  </footer>
  )
}

Footer.propTypes = {
  handleClickBack: PropTypes.func.isRequired,
  faveArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  pokemon: PropTypes.arrayOf(PropTypes.object).isRequired,
  showFavorites: PropTypes.func.isRequired,
  isFavoriteVisible: PropTypes.bool.isRequired
}

export default Footer;
