import React, { Component } from "react";


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      loginCount: 0
    };    
  }

  clickEventHandler = () => {
    this.setState({
      isLogin: !this.state.isLogin
    },() => {
      this.setState((state) => ({
        loginCount: !state.isLogin ? state.loginCount : state.loginCount + 1
      }));    
    });
    
  }

  render() {
    return (
      <div className="Form">
          <button onClick={this.clickEventHandler}>
            {this.state.isLogin ? "Logout" : "Login"}
          </button><br/>
          Login Count : {this.state.loginCount} <br/>
          {this.state.isLogin && "Welcome " + this.props.username}
      </div>
    );
  }
}

export default LoginForm;
