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
          {type: 'header', content: 'Good to Go Stores'},
          {type: 'cover', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'paragraph', content: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'},
          {type: 'header', content: 'This is a  header'},
          {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel '},
          {type: 'image', w: 'calc(40% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'image', w: 'calc(60% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'header', content: 'Another  header'},
          {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum'},
          {type: 'image', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'image', w: '100%', h: 298, column: 2, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'}
        ],
        [
          {type: 'header', content: 'Good to Go Stores'},
          {type: 'cover', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'paragraph', content: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'},
          {type: 'header', content: 'This is a  header'},
          {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel '},
          {type: 'image', w: 'calc(40% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'image', w: 'calc(60% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'header', content: 'Another  header'},
          {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum'},
          {type: 'image', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'image', w: '100%', h: 298, column: 2, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'}
        ],
        [
          {type: 'header', content: 'Good to Go Stores'},
          {type: 'cover', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'paragraph', content: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'},
          {type: 'header', content: 'This is a  header'},
          {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel '},
          {type: 'image', w: 'calc(40% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'image', w: 'calc(60% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'header', content: 'Another  header'},
          {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum'},
          {type: 'image', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'image', w: '100%', h: 298, column: 2, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'}
        ],
        [
          {type: 'header', content: 'Good to Go Stores'},
          {type: 'cover', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'paragraph', content: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'},
          {type: 'header', content: 'This is a  header'},
          {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel '},
          {type: 'image', w: 'calc(40% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'image', w: 'calc(60% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'header', content: 'Another  header'},
          {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum'},
          {type: 'image', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {type: 'image', w: '100%', h: 298, column: 2, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'}
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

  render() {

    var location = hashHistory.getCurrentLocation().pathname;

    return (
      <section className="Work">
        {this.state.width > 600 ? (
          <WorkDesktop goHome={this.props.goHome}
            isHome={this.props.isHome} works={this.state.works}
            curWork={this.props.curWork} storeWork={this.props.storeWork}
            workIndex={this.props.workIndex}
            updWorkIndex={this.props.updWorkIndex} />
        ) : (
          <WorkMobile goHome={this.props.goHome}
            isHome={this.props.isHome} works={this.state.works}
            curWork={this.props.curWork} storeWork={this.props.storeWork}
            workIndex={this.props.workIndex}
            updWorkIndex={this.props.updWorkIndex} />
        )}
      </section>
    )
  }
}

export default Work;
