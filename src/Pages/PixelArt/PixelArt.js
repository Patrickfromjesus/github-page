import React, { Component } from "react";
import Header from "../../Components/Header";
import './PixelArt.css';

class PixelArt extends Component {
  constructor() {
    super();
    this.state = { qnt: 0, color: '#ffffff', pincel: '#ffffff' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    if (target.type === 'color') return this.setState({ pincel: target.value });
    if (target.name === 'erase') return this.setState({ pincel: '#ffffff' });
    if (target.value <= 15) this.setState({ qnt: target.value });
    else this.setState({ qnt: 0 });
  }

  changeColor({ target }) {
    const { pincel } = this.state;
    target.style.backgroundColor = pincel; 
  }

  render() {
    const { qnt, color, pincel } = this.state;
    const renderSquares = [];
    for(let i = 0; i < qnt; i += 1) {
      renderSquares.push(<span key={ i } style={ { backgroundColor: color } } onClick={ (event) => this.changeColor(event) } className="square-div" />);
    }
    <div className="div-square" />
    return (
      <div>
        <Header />
        <h1>Pixel Art</h1> Escolha a sua cor:
        <input value={ pincel } className="color-type" type="color" onChange={ (event) => this.handleChange(event) } />
        <div>
          <label htmlFor="input">Defina o tamanho da aquarela<br/>
          <input value={ qnt } className="input-squares" type="number" id="input" onChange={ (event) => this.handleChange(event) } />
          </label>
          <button className="btn-erase" type="button" name="erase" onClick={ (event) => this.handleChange(event) }>Borracha</button>
          {
            renderSquares.map((_square, index) => (
            <span key={ index } className="divs-square">{ renderSquares }</span>))
          } <br/>
        </div>
      </div>
    );
  }
}

export default PixelArt;
