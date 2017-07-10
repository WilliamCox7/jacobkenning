import React, { Component } from 'react';
import jake from '../../src/Portrait.jpg';
import axios from 'axios';
import './About.scss';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: document.body.clientWidth,
      contact: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
    this.getWidth = this.getWidth.bind(this);
    this.update = this.update.bind(this);
    this.send = this.send.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.getWidth);
  }

  getWidth(e) {
    this.setState({width: e.target.innerWidth});
  }

  update(e) {
    var newContact = this.state.contact;
    newContact[e.target.name] = e.target.value;
    this.setState({contact: newContact});
  }

  send() {
    if (this.state.contact.name && this.state.contact.email && this.state.contact.message) {
      axios.post('/send', this.state.contact).then((result) => {
        this.setState({contact: {
          name: '',
          email: '',
          subject: '',
          message: ''
        }});
      });
    }
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
            <h2>jakekenning@gmail.com</h2>
            <div className="about-input">
              <div className="input-header">Name</div>
              <input name="name" value={this.state.contact.name}
                type="text" onChange={this.update} />
            </div>
            <div className="about-input">
              <div className="input-header">Email</div>
              <input name="email" value={this.state.contact.email}
                type="text" onChange={this.update} />
            </div>
            <div className="about-input">
              <div className="input-header">Subject</div>
              <input name="subject" value={this.state.contact.subject}
                type="text" onChange={this.update} />
            </div>
            <div className="about-input">
              <div className="input-header">Message</div>
              <textarea name="message" value={this.state.contact.message}
                onChange={this.update}></textarea>
            </div>
            <button onClick={this.send}>Send</button>
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
