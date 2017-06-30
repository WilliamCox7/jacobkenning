import React, { Component } from 'react';
import prevarrow from '../../src/prev-arrow.svg';
import nextarrow from '../../src/next-arrow.svg';
import WorkPost from './WorkPost';
import './WorkMobile.scss';

class WorkMobile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      work: this.props.isHome,
      index: undefined
    }
    this.selectPost = this.selectPost.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  selectPost(post, i) {
    this.setState({work: post, index: i});
    this.props.goHome(false);
  }

  prev() {
    var newIndex = this.state.index-1;
    this.setState({
      work: this.props.works[newIndex],
      index: newIndex
    });
  }

  next() {
    var newIndex = this.state.index+1;
    this.setState({
      work: this.props.works[newIndex],
      index: newIndex
    });
  }

  render() {

    var posts = this.props.works.map((post, i) => {

      var initHeader, initPara, hasImg;
      var initImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/500px-No_image_available.svg.png";
      post.forEach((item) => {
        if (!hasImg) {
          if (item.type === 'image') {
            initImg = item.content;
            hasImg = true;
          }
        }
        if (!initHeader) {
          if (item.type === 'header') {
            initHeader = item.content;
          }
        }
        if (!initPara) {
          if (item.type === 'paragraph') {
            initPara = item.content;
          }
        }
      });

      return (
        <div key={i} className="post">
          <div className="post-heading">
            {initHeader}
          </div>
          <div className="post-cover">
            <img src={initImg} />
          </div>
          <p className="init-para">{initPara.substring(0, 350)}...</p>
          <p onClick={() => { this.selectPost(post, i); }} className="case-link">
            See case study
            <img src={nextarrow} />
          </p>
        </div>
      );
    });

    return (
      <section className="WorkMobile">
        {location !== "/about" && !this.props.isHome ? (
          <div className="nav-arrows">
            <div className="arrow">
              {this.state.index > 0 ? (
                <span onClick={this.prev}>
                  <img src={prevarrow} />
                  <p>prev</p>
                </span>
              ) : (null)}
            </div>
            <div className="arrow">
              {this.state.index < this.props.works.length-1 ? (
                <span onClick={this.next}>
                  <p>next</p>
                  <img src={nextarrow} />
                </span>
              ) : (null)}
            </div>
          </div>
        ) : (null)}
        {this.props.isHome ? (posts) : (
          <WorkPost work={this.state.work} />
        )}
      </section>
    )
  }
}

export default WorkMobile;
