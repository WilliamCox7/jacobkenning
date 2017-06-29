import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import goldfb from '../../src/gold-fb.svg';
import goldig from '../../src/gold-ig.svg';
import goldin from '../../src/gold-in.svg';
import goldtw from '../../src/gold-tw.svg';
import logo from '../../src/logo.svg';
import name from '../../src/name.svg';
import prevarrow from '../../src/prev-arrow.svg';
import nextarrow from '../../src/next-arrow.svg';
import './Nav.scss';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
    this.showActive = this.showActive.bind(this);
  }

  componentDidMount() {
    this.showActive();
  }

  showActive() {
    var work = document.getElementById("span-work");
    var blog = document.getElementById("span-blog");
    var about = document.getElementById("span-about");
    var location = hashHistory.getCurrentLocation().pathname;
    if (location === '/') {
      work.classList.add("nav-active");
      blog.classList.remove("nav-active");
      about.classList.remove("nav-active");
    } else if (location === '/blog') {
      work.classList.remove("nav-active");
      blog.classList.add("nav-active");
      about.classList.remove("nav-active");
    } else if (location === '/about') {
      work.classList.remove("nav-active");
      blog.classList.remove("nav-active");
      about.classList.add("nav-active");
    }
  }

  redirect(e) {
    var route = e.target.innerText === 'work' ? '' : e.target.innerText;
    this.props.router.push('/'+route);
    this.showActive();
  }

  render() {

    return (
      <section className="Nav">
        <div className="nav-logo">
          <img src={logo} />
        </div>
        <div className="nav-name">
          <img src={name} />
        </div>
        <div className="tabs">
          <span onClick={this.redirect} id="span-work">work</span>
          <span onClick={this.redirect} id="span-blog">blog</span>
          <span onClick={this.redirect} id="span-about">about</span>
        </div>
        <div className="nav-arrows">
          <div className="arrow">
            <img src={prevarrow} />
            <p>prev</p>
          </div>
          <div className="arrow">
            <p>next</p>
            <img src={nextarrow} />
          </div>
        </div>
      </section>
    )
  }
}

export default Nav;