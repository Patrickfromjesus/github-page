import React, {Component} from "react";
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="home-header">
        <Link className="link link-header-projects" to="/github-page">Home</Link>
        <Link className="link link-header-projects" to="/github-page/about-projects">Projetos</Link>
      </div>
    );
  }
}

export default Header;
