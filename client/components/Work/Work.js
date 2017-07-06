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
          {workId: 1, type: 'header', content: 'Good to Go Stores'},
          {workId: 1, type: 'cover', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 1, type: 'paragraph', content: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'},
          {workId: 1, type: 'header', content: 'This is a  header'},
          {workId: 1, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel '},
          {workId: 1, type: 'image', w: 'calc(40% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 1, type: 'image', w: 'calc(60% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 1, type: 'header', content: 'Another  header'},
          {workId: 1, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum'},
          {workId: 1, type: 'image', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 1, type: 'image', w: '100%', h: 298, column: 2, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'}
        ],
        [
          {workId: 2, type: 'header', content: 'Good to Go Stores'},
          {workId: 2, type: 'cover', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 2, type: 'paragraph', content: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'},
          {workId: 2, type: 'header', content: 'This is a  header'},
          {workId: 2, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel '},
          {workId: 2, type: 'image', w: 'calc(40% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 2, type: 'image', w: 'calc(60% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 2, type: 'header', content: 'Another  header'},
          {workId: 2, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum'},
          {workId: 2, type: 'image', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 2, type: 'image', w: '100%', h: 298, column: 2, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'}
        ],
        [
          {workId: 3, type: 'header', content: 'Good to Go Stores'},
          {workId: 3, type: 'cover', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 3, type: 'paragraph', content: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'},
          {workId: 3, type: 'header', content: 'This is a  header'},
          {workId: 3, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel '},
          {workId: 3, type: 'image', w: 'calc(40% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 3, type: 'image', w: 'calc(60% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 3, type: 'header', content: 'Another  header'},
          {workId: 3, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum'},
          {workId: 3, type: 'image', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 3, type: 'image', w: '100%', h: 298, column: 2, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'}
        ],
        [
          {workId: 4, type: 'header', content: 'Good to Go Stores'},
          {workId: 4, type: 'cover', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 4, type: 'paragraph', content: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'},
          {workId: 4, type: 'header', content: 'This is a  header'},
          {workId: 4, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel '},
          {workId: 4, type: 'image', w: 'calc(40% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 4, type: 'image', w: 'calc(60% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 4, type: 'header', content: 'Another  header'},
          {workId: 4, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum'},
          {workId: 4, type: 'image', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {workId: 4, type: 'image', w: '100%', h: 298, column: 2, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'}
        ]
      ]
    }
    this.getWidth = this.getWidth.bind(this);
    this.newPost = this.newPost.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.getWidth);
  }

  getWidth(e) {
    this.setState({width: e.target.innerWidth});
  }

  newPost() {
    this.props.storeEdit([]);
    this.props.router.push('/admin/edit');
  }

  render() {

    return (
      <section className="Work">
        {this.props.isJake ? (
          <div onClick={this.newPost} className="edit-controls">
            <i className="fa fa-plus-square" aria-hidden="true"></i>
          </div>
        ) : (null)}
        {this.state.width > 600 ? (
          <WorkDesktop goHome={this.props.goHome}
            isHome={this.props.isHome} works={this.state.works}
            curWork={this.props.curWork} storeWork={this.props.storeWork}
            workIndex={this.props.workIndex} isJake={this.props.isJake}
            updWorkIndex={this.props.updWorkIndex} storeEdit={this.props.storeEdit}
            router={this.props.router} />
        ) : (
          <WorkMobile goHome={this.props.goHome}
            isHome={this.props.isHome} works={this.state.works}
            curWork={this.props.curWork} storeWork={this.props.storeWork}
            workIndex={this.props.workIndex} isJake={this.props.isJake}
            updWorkIndex={this.props.updWorkIndex} storeEdit={this.props.storeEdit}
            router={this.props.router} />
        )}
      </section>
    )
  }
}

export default Work;
