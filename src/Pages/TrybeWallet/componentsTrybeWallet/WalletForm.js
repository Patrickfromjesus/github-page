import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchApiExpenses, makeChanges } from '../redux/actions';
import './WalletForm.css';
import Load from './Loading';

class WalletForm extends Component {
  constructor(props) {
    super(props);
    const { initialState } = this.props;
    this.state = { ...initialState };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickBefore = this.handleClickBefore.bind(this);
    this.handleEditBefore = this.handleEditBefore.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    const { id, edit, index } = this.props;
    if (edit) return this.setState((prev) => ({ ...prev, id: index, [name]: value }));
    this.setState((prev) => ({ ...prev, id, [name]: value }));
  }

  handleClickBefore(state) {
    const { handleClick, initialState } = this.props;
    this.setState({ ...initialState });
    handleClick(state);
  }

  handleEditBefore(state) {
    const { handleEdit } = this.props;
    handleEdit(state);
  }

  render() {
    const { currencies, loading, edit } = this.props;
    const { value, description, tag, method, currency } = this.state;
    return (
      <div>
        <div className="form-wallet">
          {
            loading ? <Load />
              : (
                <div className="div-form-wallet">
                  <input
                    className="input-wallet"
                    type="number"
                    name="value"
                    onChange={ (e) => this.handleChange(e) }
                    data-testid="value-input"
                    value={ value }
                    placeholder="value"
                  />
                  <input
                    className="input-wallet"
                    type="text"
                    name="description"
                    onChange={ (e) => this.handleChange(e) }
                    data-testid="description-input"
                    value={ description }
                    placeholder="description"
                  />
                  <select
                    className="select-wallet"
                    name="currency"
                    value={ currency }
                    data-testid="currency-input"
                    onChange={ (e) => this.handleChange(e) }
                  >
                    { currencies.map((curr, i) => (
                      <option
                        key={ i }
                      >
                        { curr }
                      </option>))}
                  </select>
                  <select
                    className="select-wallet"
                    name="method"
                    value={ method }
                    data-testid="method-input"
                    onChange={ (e) => this.handleChange(e) }
                  >
                    <option>Dinheiro</option>
                    <option>Cartão de crédito</option>
                    <option>Cartão de débito</option>
                  </select>
                  <select
                    className="select-wallet"
                    name="tag"
                    value={ tag }
                    data-testid="tag-input"
                    onChange={ (e) => this.handleChange(e) }
                  >
                    <option>Alimentação</option>
                    <option>Lazer</option>
                    <option>Trabalho</option>
                    <option>Transporte</option>
                    <option>Saúde</option>
                  </select>
                  {
                    edit ? (
                      <button
                      className="button-wallet"
                        type="reset"
                        onClick={ () => this.handleEditBefore(this.state) }
                      >
                        Editar despesa
                      </button>
                    )
                      : (
                        <button
                          className="button-wallet"
                          type="reset"
                          onClick={ () => this.handleClickBefore(this.state) }
                        >
                          Adicionar despesa
                        </button>
                      )
                    }
                </div>
            )
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  loading: state.wallet.loading,
  id: state.wallet.idToEdit,
  edit: state.wallet.edit,
  index: state.wallet.indexChange,
  initialState: state.wallet.initialState,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (state) => dispatch(fetchApiExpenses(state)),
  handleEdit: (state) => dispatch(makeChanges(state)),
});

WalletForm.propTypes = {
  currencies: propTypes.instanceOf(Array).isRequired,
  loading: propTypes.bool.isRequired,
  handleClick: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
  edit: propTypes.bool.isRequired,
  handleEdit: propTypes.func.isRequired,
  index: propTypes.number.isRequired,
  initialState: propTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
