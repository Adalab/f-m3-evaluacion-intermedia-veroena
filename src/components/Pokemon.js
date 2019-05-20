import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const {url, name, types, id, catchphrase, handleClickFilter, handleClickModal, handleClickSpeech, speechId, addFavorites, faveArr} = this.props;
    return(
      <div id={id} className="card">
        {speechId === id ? <div className="speech__container">{catchphrase}</div> : null }
        <i id={id} onClick={addFavorites} className={`pokemon__favorite ${faveArr.includes(id) ? 'fas fa-heart' : 'far fa-heart'}`}></i>
        {/* <i id={id} className="pokemon__favorite far fa-heart" onClick={addFavorites}></i> */}
        <div className="image__container" onClick={handleClickSpeech} data-id={id}>
          <img src={url} alt={name} className="list__item--image" data-id={id} />
        </div>
        <h2 className="list__item--title">{name}</h2>
        <div className="lower__part">
          <ul className="list__item--types">
            {types.map((item, index) => 
              <li onClick={handleClickFilter} key={index} className="types__item">{item}</li>
            )}
          </ul>
          <i onClick={handleClickModal} id={id} className="fas fa-info"></i>
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  catchphrase: PropTypes.string.isRequired,
  handleClickFilter: PropTypes.func.isRequired,
  handleClickSpeech: PropTypes.func.isRequired,
  handleClickModal: PropTypes.func.isRequired,
  speechId: PropTypes.number
}

export default Pokemon;
