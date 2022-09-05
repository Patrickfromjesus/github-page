import React from 'react';

function filterFunc(cards, removeCard) {
  const cardsLi = cards.map((card, index) => {
    const { name, desc, image, attr1, attr2, attr3, rare, trunfo } = card;
    let rareSpan = '';
    if (rare === 'normal') rareSpan = <span className="rare normal">{ `${rare.toUpperCase()} `}</span>;
    if (rare === 'raro') rareSpan = <span className="rare raro">{ `${rare.toUpperCase()} `}</span>;
    if (rare === 'muito raro') rareSpan = <span className="rare muito-raro">{ `${rare.toUpperCase()} `}</span>;
    return (
      <div key={ index }>
      <div className="cards-div-out" key={ index }>
      <div className="cards-div" key={ index }>
        <div className="img-name">
        <div className="rare-name">
          { rareSpan }
          <span className="name">{ `${name} `}</span>
        </div>
          <img alt={ name } src={ image } />
        </div>
          <p className="descr">{ `${desc} `}</p>
          <div className="attr">
            <p className="attrs"><span>Ataque</span> <span>{ attr1 }</span></p>
            <p className="attrs"><span>Meio Campo</span> <span>{ attr2 }</span></p>
            <p className="attrs"><span>Defesa</span> <span>{ attr3 }</span></p>
          </div>
          {trunfo ? <div className="relative-div"><h4 className="strunfo">SUPER TRUNFO!</h4></div> : ''}
        </div>
        </div>
        <button
          type="button"
          id="delete-btn"
          data-testid="delete-button"
          onClick={ () => removeCard(index) }
        >
          Excluir
        </button>
      </div>);
  });
  return cardsLi;
}

export default filterFunc;
