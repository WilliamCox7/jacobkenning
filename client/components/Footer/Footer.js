import React, { Component } from 'react';
import whitefb from '../../src/white-fb.svg';
import whiteig from '../../src/white-ig.svg';
import whitein from '../../src/white-in.svg';
import whitetw from '../../src/white-tw.svg';
import logo from '../../src/logo-white.svg';
import './Footer.scss';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    }
  }

  componentDidMount() {
    this.setState({fixed: document.body.clientHeight < window.innerHeight});
  }

  render() {

    var fixed = this.state.fixed;
    if (document.body.clientHeight < window.innerHeight) {
      fixed = true;
    } else {
      fixed = false;
    }

    return (
      <section className="Footer" style={fixed ? {
        position: 'fixed', bottom: '0', width: '100%'
      } : null}>
        <div className="footer-container">
          <div className="footer-icons">
            <img className="footer-logo" src={logo} />
            <div className="footer-social-media">
              <a href="https://www.facebook.com/jacob.kenning.3" target="_blank"><img src={whitefb} /></a>
              <a href="https://www.linkedin.com/in/jacob-kenning-b5308688/" target="_blank"><img src={whitein} /></a>
              <a href="https://www.instagram.com/jakekenning/" target="_blank"><img src={whiteig} /></a>
              <a href="https://twitter.com/jakenning" target="_blank"><img src={whitetw} /></a>
            </div>
          </div>
          <div className="copyright">
            Copyright© Jacob Kenning 2017
          </div>
        </div>
      </section>
    )
  }
}

export default Footer;
