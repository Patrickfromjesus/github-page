import React, { Component } from "react";
import Header from "../../Components/Header";
import './ColorGuess.css';

class ColorGuess extends Component {
  constructor() {
    super();
    this.state = { color: { backgroundColor: "rgb(1,1,1)" }, win: '', score: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target: { style: { backgroundColor } } }) {
    const { color, score } = this.state;
    console.log(backgroundColor);
    if (backgroundColor === color.backgroundColor) this.setState((prev) => ({ win: true, score: prev.score + 1 }));
    else this.setState({ win: false });
    if (backgroundColor !== color.backgroundColor && score !== 0) this.setState((prev) => ({ score: prev.score - 1 }));
    this.componentDidMount();
  }

  generateRandomColors() {
    let getRandom = Math.floor(Math.random() * 255.3);
    if(getRandom > 255) {
        return 255;
    }
    return getRandom;
  }

  generateRgb() {
    return {
      backgroundColor: `rgb(${this.generateRandomColors()}, ${this.generateRandomColors()}, ${this.generateRandomColors()})`
    };
  }

  componentDidMount() {
    const color = this.generateRgb();
    this.setState({ color });
  }
  
  render() {
    const { win, color, score } = this.state;
    const randomNum = Math.floor(Math.random() * 5);
    const color1 = randomNum === 0 ? color : this.generateRgb();
    const color2 = randomNum === 1 ? color : this.generateRgb();
    const color3 = randomNum === 2 ? color : this.generateRgb();
    const color4 = randomNum === 3 ? color : this.generateRgb();
    const color5 = randomNum === 4 ? color : this.generateRgb();
    return (
      <div className="color-guess">
        <Header /><br/>
        <div className="color-guess-div">
          <h1 className="title-color" style={ { color: 'aqua', textShadow: '1px 1px 1px #000', textAlign: 'center' } }>Guess Color</h1>
          <p className="rgb">{ color.backgroundColor }</p><br/>
          <div className="colors">
            <div onClick={ (event) => this.handleClick(event) } style={ color1 } className="color-to-guess">cor 1</div>
            <div onClick={ (event) => this.handleClick(event) } style={ color2 } className="color-to-guess">cor 2</div>
            <div onClick={ (event) => this.handleClick(event) } style={ color3 } className="color-to-guess">cor 3</div>
            <div onClick={ (event) => this.handleClick(event) } style={ color4 } className="color-to-guess">cor 4</div>
            <div onClick={ (event) => this.handleClick(event) } style={ color5 } className="color-to-guess">cor 5</div>
          </div><br/>
          <p>{ win === '' ? null : win ? 'Você venceu!' : 'Você perdeu. Tente novamente!' }</p>
          <p className="score">Pontuação: { score }</p>
        </div>
        <hr/>
        <footer className="footer-color-guess">
          Este projeto foi um dos primeiros que fiz quando comecei a estudar JavaScript e foi utilizado aqui basicamento JS Vanilla, CSS3 e HTML5 somente.
      </footer>
      </div>
    );
  }
}

export default ColorGuess;
