import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined
    }
    this.auth = this.auth.bind(this);
    this.updAuth = this.updAuth.bind(this);
  }

  componentDidMount() {
    if (this.props.isJake) {
      this.props.router.push('/admin/edit');
    }
  }

  updAuth(e) {
    var newAuth = {};
    newAuth[e.target.name] = e.target.value;
    this.setState(newAuth);
  }

  auth() {
    this.props.authJake();
    this.props.router.push('/');
  }

  render() {
    return (
      <div className="Login">
        <input name="username" onChange={this.updAuth} type="text" placeholder="username" />
        <input name="password" onChange={this.updAuth} type="password" placeholder="password" />
        <button onClick={this.auth}>Login</button>
      </div>
    )
  }
}

export default Login;
