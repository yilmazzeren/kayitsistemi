import React, { Component } from "react";
import "./style.css";
import AuthView from "../AuthView/AuthView";


class HomeView extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="container">
          <h1 className="title">
            ÖĞRENCİ NOT <br /> KONTROL SİSTEMİ
          </h1>
          <AuthView/>
        </div>
      </div>
    );
  }
}

export default HomeView;
