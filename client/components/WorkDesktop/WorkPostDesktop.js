import React, { Component } from 'react';

class WorkPostDesktop extends Component {

  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {

    var content = this.props.work.map((item, i) => {
      if (i !== 0) {
        var images = [];
        item.images.forEach((image, j) => {
          images.push(
            <img key={j} src={image} />
          );
        });
        return (
          <div key={i} className="item">
            <div className="item-image">
              {images}
            </div>
            <div className="item-content">
              {item.header ? (
                <h1>{item.header}</h1>
              ) : (
                <h2>{item.subheader}</h2>
              )}
              <p>{item.paragraph}</p>
            </div>
          </div>
        )
      }
    });

    return (
      <section className="WorkPostDesktop">
        {content}
      </section>
    )
  }
}

export default WorkPostDesktop;
