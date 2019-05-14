import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  const {handleClickBack} = props;
  return (
    <footer className="footer">
    <button onClick={handleClickBack} className="pokeball"><img src="https://img.icons8.com/color/50/000000/pokeball.png" alt="pokeball"></img>Back</button>
  </footer>
  )
}

Footer.propTypes = {
  handleClickBack: PropTypes.func
}

export default Footer;
