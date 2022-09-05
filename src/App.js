import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ColorGuess from './Pages/ColorGuess/ColorGuess';
import PixelArt from './Pages/PixelArt/PixelArt';
import Bible from './Pages/Bible/Bible';
import Tryunfo from './Pages/Tryunfo/Tryunfo';
import Projects from './Pages/ProjectsPage/Projects';
import { Provider } from 'react-redux';
import store from './Pages/Bible/ComponetsBible/Redux/Store';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={ store }>
          <Route exact path="/github-page" component={ Home } />
          <Route path="/github-page/color-guess" component={ ColorGuess } />
          <Route path="/github-page/pixel-art" component={ PixelArt } />
          <Route path="/github-page/bible" component={ Bible } />
          <Route path="/github-page/tryunfo" component={ Tryunfo } />
          <Route path="/github-page/about-projects" component={ Projects } />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
