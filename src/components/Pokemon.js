import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const {url, name, types, handleClickFilter, handleClickAlert} = this.props;
    return(
      <div className="card">
        <div className="image__container" onClick={handleClickAlert}>
          <img src={url} alt="" className="list__item--image"/>
        </div>
        <h2 className="list__item--title">{name}</h2>
        <ul className="list__item--types">
          {types.map((item, index) => 
            <li onClick={handleClickFilter} key={index} className="types__item">{item}</li>
          )}
        </ul>
      </div>
    )
  }
}

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
}

export default Pokemon;
