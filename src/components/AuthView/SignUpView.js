import React, { Component } from 'react'
import {Link} from "react-router-dom"

 class SignUpView extends Component {
    render() {
        return (
            <div>
                <form className="form-inline">
          <div className="form-group mb-2">
            <input style={{width:"400px" , marginRight:"40px"}} type="text" className="form-control" placeholder="E-posta" />
          </div>
          
          <button type="submit" className="btn btn-primary mb-2">
            Kayıt Ol
          </button>
          
        </form>
        <p>
          Zaten üye misiniz ? <br />
          O zaman giriş yapmak için 
          <b>
            <u>
              <Link to="#" onClick={(e) => {
                  e.preventDefault()
                  this.props.changeView(1)
              }}>  tıklayınız.</Link>
            </u>
          </b>
        </p>
            </div>
        )
    }
}

export default SignUpView;