import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

    state= {
        isNavOpen:false
    }

    buttonClicked = () => {
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }
  render() {
      
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light container justify-content-between">
          <Link to="/" className="navbar-brand">
            Kayıt Sistemi
          </Link>
          <button className="navbar-toggler" type="button" onClick={this.buttonClicked}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse" style={{display: this.state.isNavOpen ? "block" : "none"}}>
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <Link to="/" className="nav-link">
                Ana Sayfa
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/hakkimizda" className="nav-link">
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/iletisim" className="nav-link">
                İletişim
              </Link>
            </li>
          </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
