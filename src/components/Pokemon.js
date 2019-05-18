import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const {url, name, types, id, handleClickFilter, handleClickAlert, handleClickModal} = this.props;
    return(
      <div className="card">
        <div className="speech__container">
          <div className="speech__content">{name}</div>
        </div>
        <div className="image__container" onClick={handleClickAlert}>
          <img src={url} alt="" className="list__item--image"/>
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
  handleClickFilter: PropTypes.func.isRequired,
  handleClickAlert: PropTypes.func.isRequired,
  handleClickModal: PropTypes.func.isRequired
}

export default Pokemon;
