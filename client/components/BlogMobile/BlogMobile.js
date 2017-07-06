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
    this.editPost = this.editPost.bind(this);
  }

  selectPost(post, i) {
    this.props.updBlogIndex(i);
    this.props.storeBlog(post);
    this.props.goHome(false);
  }

  editPost(post) {
    this.props.storeEdit(post);
    this.props.router.push('/admin/edit');
  }

  prev() {
    var newIndex = this.props.blogIndex-1;
    this.props.updBlogIndex(newIndex);
    this.props.storeBlog(this.props.blogs[newIndex]);
  }

  next() {
    var newIndex = this.props.blogIndex+1;
    this.props.updBlogIndex(newIndex);
    this.props.storeBlog(this.props.blogs[newIndex]);
  }

  render() {

    var posts = this.props.blogs.map((post, i) => {

      var initHeader, initPara, hasImg, date;
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
        if (!date) {
          if (item.type === 'date') {
            date = item.content;
          }
        }
      });

      return (
        <div key={i} className="post">
          <div className="post-heading">
            {initHeader}
            {this.props.isJake ? (
              <i className="fa fa-pencil" aria-hidden="true"
                onClick={() => { this.editPost(post); }}></i>
            ) : (null)}
          </div>
          <div className="post-cover">
            <img src={initImg} />
          </div>
          <div className="post-date">
            <h2>{date}</h2>
          </div>
          <p className="init-para">{initPara.substring(0, 350)}...</p>
          <p onClick={() => { this.selectPost(post, i); }} className="case-link">
            Continue Reading
            <img src={nextarrow} />
          </p>
        </div>
      );
    });

    return (
      <section className="BlogMobile">
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
        {this.props.isHome ? (posts) : (
          <BlogPostMobile blog={this.props.curBlog} />
        )}
      </section>
    )
  }
}

export default BlogMobile;
