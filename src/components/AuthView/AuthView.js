import React, { Component } from "react";

import LoginView from "./LoginView";
import SignUpView from "./SignUpView";
import PasswordReset from "./PasswordReset";

class AuthView extends Component {

    // 1 : Giriş Ekranı
    // 2 : Kayıt Ekranı
    // 3 : Şifre Reset Ekranı

    state = {
        currentView : 1
    }

    changeView = (newView) => {
      this.setState({
        currentView:newView
      })
    }

  render() {

    const view =
    this.state.currentView===1 ? <LoginView changeView={this.changeView}/> :
    this.state.currentView===2 ? <SignUpView changeView={this.changeView}/> :
    this.state.currentView===3 ? <PasswordReset changeView={this.changeView}/> : null
                
    return (
      <div>
          {view}
      </div>
    );
  }
}

export default AuthView;
