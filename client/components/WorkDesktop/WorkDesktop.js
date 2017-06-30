import React, { Component } from 'react';
import WorkPostDesktop from './WorkPostDesktop';
import nextarrow from '../../src/next-arrow.svg';
import './WorkDesktop.scss';

class WorkDesktop extends Component {

  constructor(props) {
    super(props);
    this.selectPost = this.selectPost.bind(this);
  }

  selectPost(post) {
    this.props.storeWork(post);
    this.props.goHome(false);
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
          <div className="post-cover">
            <img src={initImg} />
          </div>
          <div className="post-info">
            <div className="post-heading">
              {initHeader}
            </div>
            <p className="init-para">{initPara.substring(0, 350)}...</p>
            <p onClick={() => { this.selectPost(post); }} className="case-link">
              See case study
              <img src={nextarrow} />
            </p>
          </div>
        </div>
      );
    });

    return (
      <section className="WorkDesktop">
        {this.props.isHome ? (posts) : (
          <WorkPostDesktop work={this.props.curWork} />
        )}
      </section>
    )
  }
}

export default WorkDesktop;
