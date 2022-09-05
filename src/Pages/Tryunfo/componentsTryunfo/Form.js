import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
      cards,
    } = this.props;

    return (
      <form>
          <label htmlFor="name">
            <p>Nome:</p>
            <input
              maxLength="20"
              value={ cardName }
              onChange={ onInputChange }
              type="text"
              data-testid="name-input"
              id="name"
            />
          </label>

          <label htmlFor="desc">
            <p>Descrição:</p>
            <textarea
            maxLength="250"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
              id="desc"
            />
          </label>

          <label htmlFor="attr1">
            <p>Ataque:</p>
            <input
              value={ cardAttr1 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr1-input"
              id="attr1"
            />
          </label>

          <label htmlFor="attr2">
            <p>Meio Campo:</p>
            <input
              value={ cardAttr2 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr2-input"
              id="attr2"
            />
          </label>

          <label htmlFor="attr3">
            <p>Defesa:</p>
            <input
              value={ cardAttr3 }
              onChange={ onInputChange }
              type="number"
              data-testid="attr3-input"
              id="attr3"
            />
          </label>

          <label htmlFor="image">
            <p>Imagem (url):</p>
            <input
              value={ cardImage }
              onChange={ onInputChange }
              type="text"
              data-testid="image-input"
              id="image"
            />
          </label>

          <label htmlFor="rare">
            <p>Raridade:</p>
            <select
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
              id="rare"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo">
            {
              cards.every((e) => !e.trunfo) ? (
                <div>
                  <span>Super Trunfo</span>
                  <input
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                    type="checkbox"
                    data-testid="trunfo-input"
                    id="trunfo"
                  />
                </div>)
                : <p>Você já tem um Super Trunfo em seu baralho</p>
            }
          </label>

          <button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            type="submit"
            data-testid="save-button"
            id="btn"
          >
            Salvar
          </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  cards: PropTypes.arrayOf(PropTypes.object),
};

Form.defaultProps = {
  cardName: '',
  cards: [],
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  isSaveButtonDisabled: false,
  onInputChange: () => { },
  onSaveButtonClick: () => { },
};

export default Form;
