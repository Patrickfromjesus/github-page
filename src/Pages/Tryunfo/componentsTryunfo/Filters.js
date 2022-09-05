import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const { changeFilter, checkDepends } = this.props;
    return (
      <div className="filter">
        <h2>Cartas Criadas</h2>
        <h4>Filtrar Cartas</h4>
        <input
          placeholder="Nome da carta"
          type="text"
          data-testid="name-filter"
          onChange={ changeFilter }
          id="filterName"
          disabled={ checkDepends }
        />
        <select
          id="filterRare"
          onChange={ changeFilter }
          defaultValue="todas"
          data-testid="rare-filter"
          disabled={ checkDepends }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="filterTrunfo">
          Super Trunfo
          <input
            type="checkbox"
            onChange={ changeFilter }
            id="filterTrunfo"
            data-testid="trunfo-filter"
          />
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  changeFilter: PropTypes.func,
  checkDepends: PropTypes.bool,
};

Filters.defaultProps = {
  changeFilter: () => { },
  checkDepends: false,
};

export default Filters;
