import React, { Component } from 'react';
import whitefb from '../../src/white-fb.svg';
import whiteig from '../../src/white-ig.svg';
import whitein from '../../src/white-in.svg';
import whitetw from '../../src/white-tw.svg';
import logo from '../../src/logo-white.svg';
import './Footer.scss';

class Footer extends Component {

  render() {
    return (
      <section className="Footer">
        <div className="footer-container">
          <div className="footer-icons">
            <img className="footer-logo" src={logo} />
            <div className="footer-social-media">
              <img src={whitefb} />
              <img src={whitein} />
              <img src={whiteig} />
              <img src={whitetw} />
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
