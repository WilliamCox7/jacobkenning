import React, { Component } from 'react';
import ReactGA from 'react-ga';

class WorkPostDesktop extends Component {

  constructor(props) {
    super(props);
    this.fireTracking = this.fireTracking.bind(this);
  }

  componentDidMount() {
    window.scroll(0, 0);
  }

  fireTracking(target) {
    ReactGA.event({
      category: 'Work Link',
      action: 'Clicked ' + target
    });
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
        var pararray = item.paragraph.split("---");
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
              <p>{para}</p>
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
