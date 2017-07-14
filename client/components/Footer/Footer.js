import React, { Component } from 'react';
import whitefb from '../../src/white-fb.svg';
import whiteig from '../../src/white-ig.svg';
import whitein from '../../src/white-in.svg';
import whitetw from '../../src/white-tw.svg';
import logo from '../../src/logo-white.svg';
import ReactGA from 'react-ga';
import './Footer.scss';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    }
    this.fireTracking = this.fireTracking.bind(this);
  }

  componentDidMount() {
    this.setState({fixed: document.body.clientHeight < window.innerHeight});
  }

  fireTracking(target) {
    ReactGA.event({
      category: 'Social Media',
      action: 'Clicked ' + target
    });
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
        position: 'absolute', bottom: '0', width: '100%'
      } : null}>
        <div className="footer-container">
          <div className="footer-icons">
            <img className="footer-logo" src={logo} />
            <div className="footer-social-media">
              <a onClick={() => { this.fireTracking('facebook'); }}
                href="https://www.facebook.com/jacob.kenning.3" target="_blank">
                <img src={whitefb} />
              </a>
              <a onClick={() => { this.fireTracking('linkedin'); }}
                href="https://www.linkedin.com/in/jacob-kenning-b5308688/" target="_blank">
                <img src={whitein} />
              </a>
              <a onClick={() => { this.fireTracking('instagram'); }}
                href="https://www.instagram.com/jakekenning/" target="_blank">
                <img src={whiteig} />
              </a>
              <a onClick={() => { this.fireTracking('twitter'); }}
                href="https://twitter.com/jakenning" target="_blank">
                <img src={whitetw} />
              </a>
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
