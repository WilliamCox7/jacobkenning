import React, { Component } from 'react';

class WorkPostDesktop extends Component {

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {

    var images = [];
    var content = [];
    if (this.props.work) {
      this.props.work.forEach((item, i) => {
        if (item.type === 'cover') {
          images.push(
            <span key={i} style={{width: item.w}}>
              <img style={{height: item.h}} src={item.content} />
            </span>
          );
        } else if (item.type === 'image') {
          if (item.column === 1) {
            images.push(
              <span key={i} style={{width: item.w}}>
                <img style={{height: item.h}} src={item.content} />
              </span>
            );
          } else {
            content.push(
              <img key={i} style={{width: '100%'}} src={item.content} />
            );
          }
        } else if (item.type === 'header') {
          content.push(
            <h1 key={i}>{item.content}</h1>
          );
        } else if (item.type === 'subheader') {
          content.push(
            <h2 key={i}>{item.content}</h2>
          );
        } else if (item.type === 'paragraph') {
          content.push(
            <p key={i}>{item.content}</p>
          );
        }
      });
    }

    return (
      <section className="WorkPostDesktop">
        <div className="desktop-images">
          {images}
        </div>
        <div className="desktop-content">
          {content}
        </div>
      </section>
    )
  }
}

export default WorkPostDesktop;
