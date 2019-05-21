import React from 'react';
import PokeList from './PokeList';
import Footer from './Footer';
import Modal from './Modal';

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

export default Home;