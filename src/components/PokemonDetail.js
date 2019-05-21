import React from 'react';
import { Link } from 'react-router-dom';

class PokemonDetail extends React.Component {
  render() {
    const { pokemon } = this.props;
    const ID = this.props.match.params.ID;
    const item = pokemon[ID -1];
    const prev = pokemon[ID -2];
    return(
      <div>
        <Link className="container__detail--click" to="/">
          <div className="container__detail">
            <div className={item.evolution !== null ? 'detail' : 'detail__small'}>
              <div className="detail__images">
                <img src={item.urlmoving} alt={item.name} className="pokemon__pic"/>
                <img src={item.urlmovingback} alt={item.name} className="pokemon__back--pic"/>
              </div>
              <h3 className="detail__name">{item.name}</h3>
              <div className="detail__content--container">
                <div className="detail__stats">
                  <h4 className="detail__types--title">types</h4>
                  <ul className="detail__types">
                    {item.types.map((type, index) =>
                      <li key={index} className="detail__types--item">{type}</li>
                    )}
                  </ul>
                  <h4 className="detail__abilities--title">abilities</h4>
                  <ul className="detail__abilities">
                    {item.abilities.map((abilities, index) =>
                      <li key={index} className="detail__abilities--item">{abilities}</li>
                    )}
                  </ul>
                  <div className="evolution">
                    {item.evolution !== null ? 
                    <div>
                      <h4 className="detail__evolution">evolution from</h4>
                      <div className="detail__evolution--container">
                        <p className="detail__evolution--text">{item.evolution}</p>
                        <img src={prev.url} alt={prev.name} className="detail__evolution--image"/>
                      </div>
                    </div>
                    :
                    ''
                    }
                    
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Link>
    </div>
    )
  }
}

export default PokemonDetail;