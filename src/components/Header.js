import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleOnClickMenu = this.handleOnClickMenu.bind(this);
  }

  handleOnClickMenu() {
    this.setState(() => ({ isOpen: true }));
  }

  handleCloseMenu() {
    this.setState(() => ({ isOpen: false }));
  }

  render() {
    return (
      <div>
        <header className="header">
          <span onClick={() => this.handleOnClickMenu()} className="header__icon-menu"><i className="fas fa-bars fa-fw"></i></span>
          <span className="header__title" >Comunicados</span>
          <span className="header__icon-search"><i className="fas fa-search fa-fw"></i></span>
        </header>
        <nav className={`menu ${this.state.isOpen ? 'menu--open' : ''}`}>
          <div className="menu__brand">
            <span>Comunicados</span>
          </div>
          <ul className="menu__list">
            <li className="menu__item">
              <NavLink className="menu__link" activeClassName="menu__link--active" to="/" onClick={() => this.handleCloseMenu()} exact>Home</NavLink>
            </li>
            <li className="menu__item">
              <NavLink className="menu__link" activeClassName="menu__link--active" to="/about" onClick={() => this.handleCloseMenu()}>About</NavLink>
            </li>
          </ul>
        </nav>
        <div
          className={`overlay ${this.state.isOpen ? 'overlay--visible' : ''}`}
          onClick={() => this.setState(() => ({ isOpen: false }))}
        ></div>
      </div>
    );
  }
}

export default Header;
