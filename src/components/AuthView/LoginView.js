import React, { Component } from "react";
import {Link} from "react-router-dom";

class LoginView extends Component {
  render() {
    return (
      <div>
        <form className="form-inline">
          <div className="form-group mb-2">
            <input type="text" className="form-control" placeholder="E-posta" />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Şifre"
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Giriş Yap
          </button>
          <Link onClick={(e) => {
                  e.preventDefault();
                  this.props.changeView(3);
                }} className="forgotPassword" to="sifremi-unuttum">
             Şifremi unuttum
          </Link>
        </form>
        <p>
          Henüz üye olmadınız mı <br />
          Ücretsiz kayıt olmak için 
          <b>
            <u>
               <Link to="#" onClick={(e) => {
                 e.preventDefault()
                 this.props.changeView(2)
               }} >  tıklayınız.</Link> 
            </u>
          </b>
        </p>
      </div>
    );
  }
}

export default LoginView;
