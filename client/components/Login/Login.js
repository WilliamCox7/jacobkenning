import React, { Component } from 'react';
import axios from 'axios';
import './Login.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: undefined,
      password: undefined
    }
    this.auth = this.auth.bind(this);
    this.logout = this.logout.bind(this);
    this.update = this.update.bind(this);
  }

  auth() {
    axios.post('/auth/local', this.state).then((result) => {
      if (result.data) {
        this.props.setJake();
        this.props.router.push('/');
      }
    });
  }

  logout() {
    axios.get('/logout').then((result) => {
      if (result.data) {
        this.props.setJake();
      }
    });
  }

  update(e) {
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <section className="Login">
        {this.props.isJake ? (
          <div className="logout-container">
            <p>Welcome Jake!</p>
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : (
          <div className="login-container">
            <input name="username" type="text" placeholder="username" onChange={this.update} />
            <input name="password" type="password" placeholder="password" onChange={this.update} />
            <button onClick={this.auth}>Submit</button>
          </div>
        )}
      </section>
    )
  }
}

export default Login;
