import React, { Component } from 'react';
import PropTypes from 'prop-types';
import filterFunc from './filterFunc';

class Cards extends Component {
  render() {
    const { cards, removeCard, filterName, filterRare, filterTrunfo } = this.props;
    const filtered = cards.filter((el) => {
      if (filterRare === 'todas') return el.name.toLowerCase().includes(filterName.toLowerCase());
      if (filterRare === 'raro') {
        return el.name.toLowerCase().includes(filterName.toLowerCase()) && el.rare === 'raro';
      }
      return el.name.toLowerCase().includes(filterName.toLowerCase()) && el.rare.includes(filterRare);
    });
    const trunfoTrue = cards.find((e) => e.trunfo);
    let renderize = '';
    if (filterTrunfo && trunfoTrue !== undefined) {
      renderize = (
        <div className="cards">
          { filterFunc([trunfoTrue], removeCard) }
        </div>);
    } else {
      renderize = (
        <div>
          {
            ((filterName.length === 0 && (filterRare === 'todas' || filterRare === '')))
              ? (
                <div className="cards">
                  { filterFunc(cards, removeCard) }
                </div>)
              : (
                <div className="cards">
                  { filterFunc(filtered, removeCard) }
                </div>)
          }
        </div>);
    }
    return (
      <div>
        { renderize }
      </div>
    );
  }
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  removeCard: PropTypes.func,
  filterName: PropTypes.string,
  filterRare: PropTypes.string,
  filterTrunfo: PropTypes.bool,
};

Cards.defaultProps = {
  cards: [],
  removeCard: () => { },
  filterName: '',
  filterRare: '',
  filterTrunfo: false,
};

export default Cards;
