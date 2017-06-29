import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import WorkMobile from '../WorkMobile/WorkMobile';
import WorkDesktop from '../WorkDesktop/WorkDesktop';

class Work extends Component {

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

    var location = hashHistory.getCurrentLocation().pathname;

    return (
      <section className="Work">
        {this.state.width > 600 ? (
          <WorkDesktop />
        ) : (
          <WorkMobile />
        )}
      </section>
    )
  }
}

export default Work;
