import React, { Component } from 'react';
import WorkPostDesktop from './WorkPostDesktop';
import prevarrow from '../../src/prev-arrow.svg';
import nextarrow from '../../src/next-arrow.svg';
import './WorkDesktop.scss';

class WorkDesktop extends Component {

  constructor(props) {
    super(props);
    this.selectPost = this.selectPost.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  selectPost(post, i) {
    this.props.updWorkIndex(i);
    this.props.storeWork(post);
    this.props.goHome(false);
  }

  prev() {
    if (this.props.workIndex > 0) {
      var newIndex = this.props.workIndex-1;
      this.props.updWorkIndex(newIndex);
      this.props.storeWork(this.props.works[newIndex]);
      window.scroll(0, 0)
    }
  }

  next() {
    if (this.props.workIndex < this.props.works.length-1) {
      var newIndex = this.props.workIndex+1;
      this.props.updWorkIndex(newIndex);
      this.props.storeWork(this.props.works[newIndex]);
      window.scroll(0, 0)
    }
  }

  render() {

    var posts = this.props.works.map((post, i) => {
      return (
        <div key={i} className="post">
          <div onClick={() => { this.selectPost(post, i); }} className="post-cover">
            <img src={post[0].images[0]} />
          </div>
          <div className="post-info">
            <div onClick={() => { this.selectPost(post, i); }} className="post-heading">
              {post[0].header}
            </div>
            <p className="init-para">{post[0].paragraph}</p>
            <p onClick={() => { this.selectPost(post, i); }} className="case-link">
              Continue case study
              <img src={nextarrow} />
            </p>
          </div>
        </div>
      );
    });

    var circles = [];
    for (var i = 0; i < this.props.works.length; i++) {
      circles.push(
        <span key={i} style={this.props.workIndex === i ? {
          background: '#C58D0F'
        } : (null)}></span>
      );
    }

    return (
      <section className="WorkDesktop">
        {location !== "/about" && !this.props.isHome ? (
          <div className="nav-arrows">
            <div className="arrow">
              <span onClick={this.prev} style={this.props.workIndex === 0 ? {
                color: 'gray'
              } : (null)}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                <p>back</p>
              </span>
            </div>
            <div className="arrow-circles">
              {circles}
            </div>
            <div className="arrow">
              <span onClick={this.next}
                style={this.props.workIndex === this.props.works.length-1 ? {
                  color: 'gray'
                } : (null)}>
                <p>next</p>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        ) : (null)}
        {this.props.isHome ? (posts) : (
          <WorkPostDesktop work={this.props.curWork} />
        )}
      </section>
    )
  }
}

export default WorkDesktop;
