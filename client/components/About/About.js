import React, { Component } from 'react';
import jake from '../../src/Portrait.jpg';
import './About.scss';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: document.body.clientWidth
    }
    this.getWidth = this.getWidth.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.getWidth);
  }

  getWidth(e) {
    this.setState({width: e.target.innerWidth});
  }

  render() {
    return (
      <section className="About">
        {this.state.width > 600 ? (
          <div className="about-desktop">
            <div className="left-side">
              <img src={jake} />
            </div>
            <div className="right-side">
              <h1 className="jake">
                This is Jake
              </h1>
              <p>
                I’m a creative, designer and media strategist. The last three years
                I’ve worked freelance and projects for clients of an internal creative
                agency at Brigham Young University - Idaho.
              </p>
              <p className="last-para">
                My data-driven work has increased measurable brand recognition for
                campus-wide events and department campaigns. My efficiency has quickly
                produced quality targeted materials. My deep understanding of nine Adobe
                Creative Cloud products brings value and insight to the teams and businesses
                I’ve worked with. Not only I bring talent but I bring a friendly and
                relatable personality. My extensive involvement in extracurricular and
                social activities has given me a network of quality peers and professionals.
              </p>
              <h1>Go Ahead</h1>
              <h2>jakekenning@gmail.com</h2>
            </div>
          </div>
        ) : (
          <div>
            <h1>This is Jake</h1>
            <img src={jake} />
            <p>
              I’m a creative, designer and media strategist. The last three years
              I’ve worked freelance and projects for clients of an internal creative
              agency at Brigham Young University - Idaho.
            </p>
            <p>
              My data-driven work has increased measurable brand recognition for
              campus-wide events and department campaigns. My efficiency has quickly
              produced quality targeted materials. My deep understanding of nine Adobe
              Creative Cloud products brings value and insight to the teams and businesses
              I’ve worked with. Not only I bring talent but I bring a friendly and
              relatable personality. My extensive involvement in extracurricular and
              social activities has given me a network of quality peers and professionals.
            </p>
            <h1>Go Ahead</h1>
            <h2>jakekenning@gmail.com</h2>
          </div>
        )}
      </section>
    )
  }
}

export default About;
