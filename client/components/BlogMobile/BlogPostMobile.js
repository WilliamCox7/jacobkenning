import React, { Component } from 'react';

class BlogPostMobile extends Component {

  render() {

    var posts = [];
    if (this.props.blog) {
      this.props.blog.forEach((item, i) => {
        if (item.type === 'header') {
          posts.push(
            <h1 key={i}>{item.content}</h1>
          );
        } else if (item.type === 'paragraph') {
          posts.push(
            <p key={i}>{item.content}</p>
          );
        } else if (item.type === 'image') {
          posts.push(
            <img key={i} src={item.content} className="post-normal-photo" />
          );
        } else if (item.type === 'cover') {
          posts.push(
            <img key={i} src={item.content} className="post-cover-photo" />
          );
        } else if (item.type === 'date') {
          posts.push(
            <div key={i} className="post-blog-date">{item.content}</div>
          );
        }
      });
    }

    return (
      <section className="BlogPostMobile">
        {posts}
      </section>
    )
  }
}

export default BlogPostMobile;
