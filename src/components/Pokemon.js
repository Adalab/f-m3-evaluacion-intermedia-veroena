import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const {url, name, types} = this.props;
    return(
      <div className="card">
        <div className="image__container">
          <img src={url} alt="" className="list__item--image"/>
        </div>
        <h2 className="list__item--title">{name}</h2>
        <ul className="list__item--types">
          {types.map((item, index) => 
            <li key={index} className="types__item">{item}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Pokemon;

Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
}