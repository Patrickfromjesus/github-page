import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce((ac, curr) => (
      parseFloat(curr.value) * parseFloat(curr.exchangeRates[curr.currency].ask) + ac), 0)
      .toFixed(2);
    return (
      <header className="header-wallet">
        <p className="email-header" data-testid="email-field">{ email }</p>
        <div className="total-header">
          <p className="total" data-testid="total-field">{ total.replace('.', ',') }</p>
          <p data-testid="header-currency-field">
            BRL
            <i className="bi bi-cash-coin" />
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, null)(Header);
