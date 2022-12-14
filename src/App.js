import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ColorGuess from './Pages/ColorGuess/ColorGuess';
import PixelArt from './Pages/PixelArt/PixelArt';
import Bible from './Pages/Bible/Bible';
import Tryunfo from './Pages/Tryunfo/Tryunfo';
import LoginWallet from './Pages/TrybeWallet/Login';
import Projects from './Pages/ProjectsPage/Projects';
import Wallet from './Pages/TrybeWallet/Wallet';
import { Provider } from 'react-redux';
import store from './Store';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={ store }>
          <Switch>
            <Route exact path="/github-page" component={ Home } />
            <Route path="/github-page/color-guess" component={ ColorGuess } />
            <Route path="/github-page/pixel-art" component={ PixelArt } />
            <Route path="/github-page/bible" component={ Bible } />
            <Route path="/github-page/tryunfo" component={ Tryunfo } />
            <Route path="/github-page/trybewallet" component={ LoginWallet } />
            <Route path="/github-page/carteira" component={ Wallet } />
            <Route path="/github-page/about-projects" component={ Projects } />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
