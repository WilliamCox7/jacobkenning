import React, { Component } from 'react';
import BlogPostDesktop from './BlogPostDesktop';
import prevarrow from '../../src/prev-arrow.svg';
import nextarrow from '../../src/next-arrow.svg';
import './BlogDesktop.scss';

class BlogDesktop extends Component {

  constructor(props) {
    super(props);
    this.selectPost = this.selectPost.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  selectPost(post, i) {
    this.props.updBlogIndex(i);
    this.props.storeBlog(post);
    this.props.goHome(false);
  }

  prev() {
    var newIndex = this.props.blogIndex-1;
    this.props.updBlogIndex(newIndex);
    this.props.storeBlog(this.props.blogs[newIndex]);
    window.scroll(0, 0)
  }

  next() {
    var newIndex = this.props.blogIndex+1;
    this.props.updBlogIndex(newIndex);
    this.props.storeBlog(this.props.blogs[newIndex]);
    window.scroll(0, 0)
  }

  render() {

    var posts = this.props.blogs.map((post, i) => {

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
            <p onClick={() => { this.selectPost(post, i); }} className="case-link">
              Continue reading
              <img src={nextarrow} />
            </p>
          </div>
        </div>
      );
    });

    return (
      <section className="BlogDesktop">
        {this.props.isHome ? (posts) : (
          <BlogPostDesktop blog={this.props.curBlog} />
        )}
        {location !== "/about" && !this.props.isHome ? (
          <div className="nav-arrows">
            <div className="arrow">
              {this.props.blogIndex > 0 ? (
                <span onClick={this.prev}>
                  <img src={prevarrow} />
                  <p>prev</p>
                </span>
              ) : (null)}
            </div>
            <div className="arrow">
              {this.props.blogIndex < this.props.blogs.length-1 ? (
                <span onClick={this.next}>
                  <p>next</p>
                  <img src={nextarrow} />
                </span>
              ) : (null)}
            </div>
          </div>
        ) : (null)}
      </section>
    )
  }
}

export default BlogDesktop;
