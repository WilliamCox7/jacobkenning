import React, { Component } from 'react';

class WorkPostMobile extends Component {

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {

    var content = this.props.work.map((item, i) => {
      if (i !== 0) {
        var images = [];
        var firstImg;
        item.images.forEach((image, j) => {
          if (j === 0) {
            firstImg = image;
          } else {
            images.push(
              <img key={j} src={image} />
            );
          }
        });
        return (
          <div key={i} className="item">
            {item.header ? (
              <h1>{item.header}</h1>
            ) : (
              <h2>{item.subheader}</h2>
            )}
            <img src={firstImg} />
            <p>{item.paragraph}</p>
            {images}
          </div>
        )
      }
    });

    return (
      <section className="WorkPostMobile">
        {content}
      </section>
    )
  }
}

export default WorkPostMobile;
