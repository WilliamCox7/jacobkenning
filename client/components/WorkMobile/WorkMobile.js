import React, { Component } from 'react';
import prevarrow from '../../src/prev-arrow.svg';
import nextarrow from '../../src/next-arrow.svg';
import './WorkMobile.scss';

class WorkMobile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      home: true,
      work: undefined,
      works: [
        {
          heading: 'Test Heading',
          cover: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg',
          p1: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'
        },
        {
          heading: 'Test Heading',
          cover: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg',
          p1: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'
        }
      ]
    }
  }

  render() {

    var posts = this.state.works.map((post, i) => {
      return (
        <div key={i} className="post">
          <div className="post-heading">
            {post.heading}
          </div>
          <div className="post-cover">
            <img src={post.cover} />
          </div>
          <p className="init-para">{post.p1.substring(0, 350)}...</p>
          <p className="case-link">
            See case study
            <img src={nextarrow} />
          </p>
        </div>
      );
    });

    return (
      <section className="WorkMobile">
        {location !== "/about" && !this.state.home ? (
          <div className="nav-arrows">
            <div className="arrow">
              <img src={prevarrow} />
              <p>prev</p>
            </div>
            <div className="arrow">
              <p>next</p>
              <img src={nextarrow} />
            </div>
          </div>
        ) : (null)}
        {this.state.home ? (posts) : (
          <WorkPost work={this.state.work} />
        )}
      </section>
    )
  }
}

export default WorkMobile;
