import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      loginCount: 0
    };
  }

  render() {
    return (
      <div className="Form">
        //Login Logout button here<br/>
        //Total number of login
      </div>
    );
  }
}

export default LoginForm;
