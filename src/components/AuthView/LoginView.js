import React, { Component } from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {userInit} from "../../redux/reducers/userReducer";


class LoginView extends Component {


  state  = {
    email : "",
    password : "",

  }

  onUserClick=()=> {
    // HTTP Call
    console.log(this.state);
    const user = {
      name : "Yılmaz ZEREN",
      email : "ylmz@gmail.com",
      age : 27,
      gender : "male"
    }

    this.props.loginUserData(user);
  }

  emailChange=(e)=> {
    this.setState({
      email:e.target.value
    })
  }

  passwordChange=(e)=> {
    this.setState({
      password:e.target.value
    })
  }

  render() {

    if(this.props.userData.name) {
      return <div>LOGİN OLDU</div>
    }else {
      return (
      <div>
        
        <form className="form-inline">
          <div className="form-group mb-2">
            <input type="text" className="form-control" placeholder="E-posta" value={this.state.email} onChange={this.emailChange}/>
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Şifre"
              value={this.state.password}
              onChange={this.passwordChange}
            />
          </div>
          <button type="button" className="btn btn-primary mb-2" onClick={this.onUserClick}>
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
}


const mapStateToProps = (state) => {
  return {
    userData : state.userReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUserData : (user) => dispatch(userInit(user))
  }
}

export default connect(mapStateToProps ,mapDispatchToProps)(LoginView);
