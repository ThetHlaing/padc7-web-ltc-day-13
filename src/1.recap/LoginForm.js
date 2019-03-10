import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      loginCount: 0
    };
  }

  onClickHandler = () => {
    this.setState({
      isLogin : !this.state.isLogin
    })

    this.setState((state)=>({
      loginCount : state.isLogin ? state.loginCount + 1 : state.loginCount
    }))
  }

  render() {
    return (
      <div className="Form">
          <button onClick={this.onClickHandler}>
            {
              this.state.isLogin ? (
                "Logout"
              ):(
                "Login"
              )
            }
          
          </button> <br/>
          Login Count : {this.state.loginCount} <br/>

            {
              this.state.isLogin && (
                this.props.username
              ) 
              
            }

      </div>
    );
  }
}

export default LoginForm;
