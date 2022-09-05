import React from 'react';
import Form from './componentsTryunfo/Form';
import Card from './componentsTryunfo/Card';
import Cards from './componentsTryunfo/Cards';
import Filters from './componentsTryunfo/Filters';
import Header from '../../Components/Header';
import './Tryunfo.css';

class Tryunfo extends React.Component {
  constructor(props) {
    super(props);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.validation = this.validation.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.state = {
      name: '',
      desc: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      trunfo: false,
      btn: true,
      hTrunfo: false,
      cards: [],
      filterName: '',
      filterRare: '',
      filterTrunfo: false,
    };
  }

  onInputChange({ target }) {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [id]: value }, () => this.validation());
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      name,
      desc,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      cards,
      trunfo,
    } = this.state;
    cards.push({
      name,
      desc,
      image,
      attr1,
      attr2,
      attr3,
      rare,
      trunfo,
    });
    this.setState({
      name: '',
      desc: '',
      image: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rare: 'normal',
      trunfo: false,
      btn: true,
    });
  }

  validation() {
    const { name, desc, image, rare, attr1, attr2, attr3 } = this.state;
    const n9 = 100;
    const n2 = 300;
    if (
      name.length !== 0 && desc.length !== 0 && image.length !== 0 && rare.length !== 0
      && (parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10) <= n2)
      && parseInt(attr1, 10) >= 0
      && parseInt(attr1, 10) <= n9 && attr2 >= 0 && parseInt(attr2, 10) <= n9
      && parseInt(attr3, 10) >= 0 && parseInt(attr3, 10) <= n9
    ) {
      this.setState({ btn: false });
    } else this.setState({ btn: true });
  }

  removeCard(index) {
    const { cards } = this.state;
    const newArr = cards.filter((_element, ind) => index !== ind);
    this.setState({ cards: newArr });
    if (cards[index].hTrunfo === true) this.setState({ hTrunfo: false });
  }

  changeFilter({ target }) {
    const { id } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [id]: value });
    console.log(value);
  }

  render() {
    const {
      name,
      desc,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      btn,
      hTrunfo,
      cards,
      filterName,
      filterRare,
      filterTrunfo,
    } = this.state;
    return (
      <div>
        <Header />
        <div className="full-screen">
          <h2>Criar Cartas</h2>

          <div className="principal-div">
            <Form
              cardName={ name }
              cardDescription={ desc }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rare }
              cardTrunfo={ trunfo }
              hTrunfo={ hTrunfo }
              isSaveButtonDisabled={ btn }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              cards={ cards }
            />
              <Card
                cardName={ name }
                cardDescription={ desc }
                cardAttr1={ attr1 }
                cardAttr2={ attr2 }
                cardAttr3={ attr3 }
                cardImage={ image }
                cardRare={ rare }
                cardTrunfo={ trunfo }
              />
          </div>
          <div className="filter-div">
            <Filters changeFilter={ this.changeFilter } checkDepends={ filterTrunfo } />
            <Cards
              cards={ cards }
              removeCard={ this.removeCard }
              filterName={ filterName }
              filterRare={ filterRare }
              filterTrunfo={ filterTrunfo }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tryunfo;
