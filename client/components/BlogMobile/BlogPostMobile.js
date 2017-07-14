import React, { Component } from 'react';
import ReactGA from 'react-ga';

class BlogPostMobile extends Component {

  constructor(props) {
    super(props);
    this.fireTracking = this.fireTracking.bind(this);
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  fireTracking(target) {
    ReactGA.event({
      category: 'Blog Link',
      action: 'Clicked ' + target
    });
  }

  render() {

    var posts = [];
    if (this.props.blog) {
      this.props.blog.forEach((item, i) => {
        if (item.type === 'header') {
          posts.push(
            <h1 key={i}>{item.content}</h1>
          );
        } else if (item.type === 'paragraph') {
          var pararray = item.content.split("---");
          var para = [];
          pararray.forEach((paraItem, j) => {
            if (j % 2 === 0) {
              para.push(paraItem);
            } else {
              para.push(
                <a onClick={() => { this.fireTracking(paraItem); }}
                  key={j} href={paraItem} target="_blank">{paraItem}</a>
              );
            }
          });
          posts.push(
            <p key={i}>{para}</p>
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
