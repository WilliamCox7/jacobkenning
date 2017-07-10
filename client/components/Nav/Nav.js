import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import goldfb from '../../src/gold-fb.svg';
import goldig from '../../src/gold-ig.svg';
import goldin from '../../src/gold-in.svg';
import goldtw from '../../src/gold-tw.svg';
import logo from '../../src/logo.svg';
import name from '../../src/name.svg';
import './Nav.scss';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
    this.showActive = this.showActive.bind(this);
    this.goToWork = this.goToWork.bind(this);
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
    var location = hashHistory.getCurrentLocation().pathname;
    var route = e.target.innerText === 'work' ? '' : e.target.innerText;
    route = '/'+route;
    if (location !== route) {
      this.props.router.push(route);
      this.props.goHome(true);
    } else {
      this.props.goHome(true);
    }
    this.showActive();
  }

  goToWork() {
    this.props.router.push('/');
    this.props.goHome(true);
    this.showActive();
  }

  render() {

    var location = hashHistory.getCurrentLocation().pathname;

    return (
      <section className="Nav">
        <div className="nav-logo">
          <img onClick={this.goToWork} src={logo} />
        </div>
        <div className="nav-name">
          <img onClick={this.goToWork} src={name} />
          <div className="nav-social-media">
            <a href="https://www.facebook.com/jacob.kenning.3" target="_blank"><img src={goldfb} /></a>
            <a href="https://www.linkedin.com/in/jacob-kenning-b5308688/" target="_blank"><img src={goldin} /></a>
            <a href="https://www.instagram.com/jakekenning/" target="_blank"><img src={goldig} /></a>
            <a href="https://twitter.com/jakenning" target="_blank"><img src={goldtw} /></a>
          </div>
        </div>
        <div className="tabs">
          <span onClick={this.redirect} id="span-work">work</span>
          <span onClick={this.redirect} id="span-blog">blog</span>
          <span onClick={this.redirect} id="span-about">about</span>
        </div>
      </section>
    )
  }
}

export default Nav;
