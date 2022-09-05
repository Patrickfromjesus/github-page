import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    let rareSpan = '';
    if (cardRare === 'normal') rareSpan = <span className="rare normal">{ `${cardRare.toUpperCase()} `}</span>;
    if (cardRare === 'raro') rareSpan = <span className="rare raro">{ `${cardRare.toUpperCase()} `}</span>;
    if (cardRare === 'muito raro') rareSpan = <span className="rare muito-raro">{ `${cardRare.toUpperCase()} `}</span>;
    return (
      <div className="div-card">
        <h2 className='title-preview'>Pré-visualização</h2>
        <div className="div-show cards-div">
        <div className="img-name">
        <div className="rare-name">
          { rareSpan }
          <span className="name" data-testid="name-card">{ cardName }</span>
          </div>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          </div>
          <p className="descr" data-testid="description-card">{ cardDescription }</p>
          <div className="attr">
            <p className="attrs" data-testid="attr1-card"><span>Ataque</span> <span>{ cardAttr1 }</span></p>
            <p className="attrs" data-testid="attr2-card"><span>Meio Campo</span> <span>{ cardAttr2 }</span></p>
            <p className="attrs" data-testid="attr3-card"><span>Defesa</span> <span>{ cardAttr3 }</span></p>
          </div>
          {
            (cardTrunfo) ? <div className="relative-div"><h4 className="strunfo" data-testid="trunfo-card">SUPER TRUNFO!</h4></div> : ''
          }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
};

export default Card;
