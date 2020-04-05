import React, { Component } from "react";
import "./style.css";
import {Link} from "react-router-dom";

class HomeView extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="container">
          <h1 className="title">
            ÖĞRENCİ NOT <br /> KONTROL SİSTEMİ
          </h1>
          <form className="form-inline">
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="E-posta"
              />
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
            <Link className="forgotPassword" to ="sifremi-unuttum">Şifremi unuttum</Link>
          </form>
          <p>Henüz üye olmadınız mı <br/>Ücretsiz kayıt olmak için <b><u> <Link to="kayit">tıklayınız.</Link> </u> </b> </p>
        </div>
      </div>
    );
  }
}

export default HomeView;
