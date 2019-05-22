import React from 'react';
import PokeList from './PokeList';
import Footer from './Footer';
import Modal from './Modal';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render() {
    const {pokemonFilter, pokemon, handleClickFilter, handleClickModal, handleClickSpeech, speechId, handleClickFavorites, addFavorites, faveArr, handleClickBack, showFavorites, isFavoriteVisible, isModalVisible, pokemonId} = this.props;

    return(
      <div className="home__content">
        <header className="header">
          <h1 className="page__title">Mi lista de</h1>
          <div className="pokemon__logo"></div>
        </header>
        <div className="wrapper">
          <PokeList pokemonFilter={pokemonFilter} handleClickFilter={handleClickFilter} handleClickModal={handleClickModal} handleClickSpeech={handleClickSpeech} speechId={speechId} handleClickFavorites={handleClickFavorites} addFavorites={addFavorites} faveArr={faveArr} />
        </div>
        <Footer handleClickBack={handleClickBack} faveArr={faveArr} pokemon={pokemon} showFavorites={showFavorites} isFavoriteVisible={isFavoriteVisible} />
        {isModalVisible && <Modal handleClickModal={handleClickModal} pokemonId={pokemonId} pokemon={pokemon} />}
      </div>
    )
  }
}

Home.propTypes = {
  pokemonFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
  pokemon: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClickFilter: PropTypes.func.isRequired,
  handleClickModal: PropTypes.func.isRequired,
  handleClickSpeech: PropTypes.func.isRequired,
  handleClickFavorites: PropTypes.func,
  addFavorites: PropTypes.func.isRequired,
  handleClickBack: PropTypes.func.isRequired,
  speechId: PropTypes.number,
  faveArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  showFavorites: PropTypes.func.isRequired,
  isFavoriteVisible: PropTypes.bool.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  pokemonId: PropTypes.number
}

export default Home;