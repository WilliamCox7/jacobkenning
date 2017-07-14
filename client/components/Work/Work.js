import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import WorkMobile from '../WorkMobile/WorkMobile';
import WorkDesktop from '../WorkDesktop/WorkDesktop';
import './Work.scss';

class Work extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: document.body.clientWidth,
      works: [
        [
          {workId: 1, images: ['./images/AdobeStock_57375919.jpeg'], header: 'Good2Go Stores',
          paragraph: `Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to
          refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly,
          and our product offerings... `},

          {workId: 1, images: ['./images/jakenning-G2g-people.jpg'], header: 'Good 2 Go Stores',
          paragraph: `Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks,
          beverages, and other convenience items. The bathrooms are clean, the staff are friendly, and the product offerings
          are value-driven. Many locations offer dining and take-out options from Champs Chicken, Burger King, Subway, and
          others. Good 2 Go offers premium fuel from the nation's top brands, which include Chevron, Conoco, Mobil, Exxon,
          Shell, Phillips 66, and more. `},

          {workId: 1, images: ['./images/jakenning-G2g-TV.jpg'], subheader: 'In-store TV animation ad',
          paragraph: `This video animation displays the promotion for each day of the week. This video is displayed on the
          TV sets in the store.To view the video go to this link: https://vimeo.com/225364321`},

          {workId: 1, images: ['./images/jakenning-G2g-hotdog.jpg', './images/jakenning-G2g-mu.jpg'], subheader: 'Photoshoot & ad design',
          paragraph: `To promote the sales of hot dogs I created a sign that illustrate creative ways to give ideas to the
          customer make a better hot dog. It started with a few sketches. I planned a photoshoot in a light box to shoot
          these hot dogs. With photoshop I pieced together the uniquely shot items. I then created the sign that would stand
          behind a roller grill just high enough to see the information. The sign is designed so that the images can be
          replaced as promotions change.`}
        ],
        [
          {workId: 2, images: ['./images/jakenning-home-commons.jpg'], header: 'Commons | Mobile Dating App',
          paragraph: `The unique feature about Commons is the UX and UI. It’s custom and friendly UX allows users to match
          with each based on things they enjoy doing or things that make up who you are. Commons allows you to post content
          about what you are... `},

          {workId: 2, images: ['./images/jakenning-Commons-img.jpg'], header: 'Commons | Mobile Dating App',
          paragraph: `The unique feature about Commons is the UX and UI. It’s custom and friendly UX allows users to match
          with each based on things they enjoy doing or things that make up who you are. Commons allows you to post content
          about what you are doing tonight and at what time you posted that content. `},

          {workId: 2, images: ['./images/jakenning-Commons-ux.jpg'], subheader: 'UX and UI',
          paragraph: `The center piece of the UX of Commons is the five hobbie circles. The five circles enables users to
          simply search and snap in their hobbies. The five circles rotates like an old dial phone. THe circle that is on
          the top of the five circles reveals the users hobby. `},

          {workId: 2, images: ['./images/jakenning-Commons-sg.jpg'], subheader: 'Logo Design',
          paragraph: `The Commons logo was inspired by the unique UX features in the app. In using the iconic heart I found
          an opportunity to give a message commonality and love at the same time by make one of the circles a heart to visualize
          that one of the hobbies may be that match.`}
        ]
      ]
    }
    this.getWidth = this.getWidth.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.getWidth);
  }

  getWidth(e) {
    this.setState({width: e.target.innerWidth});
  }

  // addWork(work) {
  //   var newState =
  // }

  render() {

    return (
      <section className="Work">
        {this.state.width > 600 ? (
          <WorkDesktop goHome={this.props.goHome}
            isHome={this.props.isHome} works={this.state.works}
            curWork={this.props.curWork} storeWork={this.props.storeWork}
            workIndex={this.props.workIndex} updWorkIndex={this.props.updWorkIndex}
            isJake={this.props.isJake} />
        ) : (
          <WorkMobile goHome={this.props.goHome}
            isHome={this.props.isHome} works={this.state.works}
            curWork={this.props.curWork} storeWork={this.props.storeWork}
            workIndex={this.props.workIndex} updWorkIndex={this.props.updWorkIndex}
            isJake={this.props.isJake} />
        )}
      </section>
    )
  }
}

export default Work;
