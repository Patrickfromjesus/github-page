import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeItem, editItem } from '../redux/actions';
import './Table.css';

class Table extends Component {
  render() {
    const { expenses, handleClick, handleEdit } = this.props;
    return (
      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          { expenses.length === 0 ? null
            : (
              expenses.map(({
                description,
                tag,
                method,
                value,
                currency,
                exchangeRates,
                id,
              }) => {
                const infos = {
                  description,
                  tag,
                  method,
                  value,
                  currency,
                  id,
                };
                const cambio = exchangeRates[currency].ask;
                return (
                  <tr key={ id }>
                    <td>{ description }</td>
                    <td>{ tag }</td>
                    <td>{ method }</td>
                    <td>{ parseFloat(value).toFixed(2).replace('.', ',') }</td>
                    <td>{ exchangeRates[currency].name }</td>
                    <td>{ parseFloat(cambio).toFixed(2).replace('.', ',') }</td>
                    <td>{ (cambio * value).toFixed(2).replace('.', ',') }</td>
                    <td>Real</td>
                    <td>
                      <button
                        type="button"
                        data-testid="edit-btn"
                        onClick={ () => handleEdit(id, infos) }
                        className="btn-edit"
                      >
                        Editar
                      </button>
                      <button
                        onClick={ () => handleClick(id) }
                        type="button"
                        data-testid="delete-btn"
                        className="btn-del"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              }))}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.instanceOf(Array).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (state) => dispatch(removeItem(state)),
  handleEdit: (state, infos) => dispatch(editItem(state, infos)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
