import React, { Component } from "react";
import { Link } from "react-router-dom";

class PasswordReset extends Component {
  render() {
    return (
      <div>
        <form className="form-inline">
          <div className="form-group mb-2">
            <input
              style={{ width: "370px" }}
              type="text"
              className="form-control"
              placeholder="E-posta"
            />
          </div>
          <div className="form-group mx-sm-3 mb-2"></div>
          <button type="submit" className="btn btn-primary mb-2">
            Şifremi resetle
          </button>
        </form>
        <p>
          Üye giriş yapmak için
          <b>
            <u>
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.changeView(1);
                }}
              >
               &nbsp;tıklayınız.
              </Link>
            </u>
          </b>
        </p>
      </div>
    );
  }
}

export default PasswordReset;
