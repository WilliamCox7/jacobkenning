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
        {this.state.width <= 600 ? (
          <h1>This is Jake</h1>
        ) : (null)}
        <div className="jake-img">
          <img src={jake} />
        </div>
        <div className="about-content">
          <div className="left-side">
            <h1>Go Ahead</h1>
            <h2>
              <a className="email" href="mailto:jakekenning@gmail.com">
                jakekenning@gmail.com
              </a>
            </h2>
          </div>
          <div className="right-side">
            {this.state.width > 600 ? (
              <h1>This is Jake</h1>
            ) : (null)}
            <p>
              I’m a creative, designer and media strategist.
            </p>
            <p>
              My data-driven work has increased measurable brand recognition for
              campus-wide events and department campaigns. My efficiency has
              quickly produced quality targeted materials.
            </p>
            <p>
              My deep understanding of nine Adobe Creative Cloud products brings
              value and insight to the teams and businesses I’ve worked with.
              Not only I bring talent but I bring a friendly and relatable
              personality. My extensive involvement in extracurricular and
              social activities has given me a network of quality peers and
              professionals.
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default About;
