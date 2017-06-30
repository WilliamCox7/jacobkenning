import React, { Component } from 'react';

class WorkPost extends Component {

  render() {

    var posts = [];
    this.props.work.forEach((item, i) => {
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
      }
    });

    return (
      <section className="WorkPost">
        {posts}
      </section>
    )
  }
}

export default WorkPost;
