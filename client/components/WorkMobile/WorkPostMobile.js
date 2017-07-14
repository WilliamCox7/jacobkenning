import React, { Component } from 'react';
import ReactGA from 'react-ga';

class WorkPostMobile extends Component {

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
            {item.header ? (
              <h1>{item.header}</h1>
            ) : (
              <h2>{item.subheader}</h2>
            )}
            <img src={firstImg} />
            <p>{para}</p>
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
