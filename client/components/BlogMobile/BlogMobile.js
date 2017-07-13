import React, { Component } from 'react';
import prevarrow from '../../src/prev-arrow.svg';
import nextarrow from '../../src/next-arrow.svg';
import BlogPostMobile from './BlogPostMobile';
import './BlogMobile.scss';

class BlogMobile extends Component {

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
    if (this.props.blogIndex > 0) {
      var newIndex = this.props.blogIndex-1;
      this.props.updBlogIndex(newIndex);
      this.props.storeBlog(this.props.blogs[newIndex]);
      window.scroll(0, 0)
    }
  }

  next() {
    if (this.props.blogIndex < this.props.blogs.length-1) {
      var newIndex = this.props.blogIndex+1;
      this.props.updBlogIndex(newIndex);
      this.props.storeBlog(this.props.blogs[newIndex]);
      window.scroll(0, 0)
    }
  }

  render() {
    var posts = this.props.blogs.map((post, i) => {
      return (
        <div key={i} className="post">
          <div onClick={() => { this.selectPost(post, i); }} className="post-heading">
            {post[0].header}
          </div>
          <div onClick={() => { this.selectPost(post, i); }} className="post-cover">
            <img src={post[0].images[0]} />
          </div>
          <div className="post-info">
            <p className="init-para">{post[0].paragraph}</p>
            <p onClick={() => { this.selectPost(post, i); }} className="case-link">
              Continue
              <img src={nextarrow} />
            </p>
          </div>
        </div>
      );
    });

    var circles = [];
    for (var i = 0; i < this.props.blogs.length; i++) {
      circles.push(
        <span key={i} style={this.props.blogIndex === i ? {
          background: '#C58D0F'
        } : (null)}></span>
      );
    }

    return (
      <section className="BlogMobile">
        {location !== "/about" && !this.props.isHome ? (
          <div className="nav-arrows">
            <div className="arrow">
              <span onClick={this.prev} style={this.props.blogIndex === 0 ? {
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
                style={this.props.blogIndex === this.props.blogs.length-1 ? {
                  color: 'gray'
                } : (null)}>
                <p>next</p>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        ) : (null)}
        {this.props.isHome ? (posts) : (
          <BlogPostMobile blog={this.props.curBlog} />
        )}
      </section>
    )
  }
}

export default BlogMobile;
