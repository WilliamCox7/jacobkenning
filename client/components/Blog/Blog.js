import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import BlogMobile from '../BlogMobile/BlogMobile';
import BlogDesktop from '../BlogDesktop/BlogDesktop';
import './Blog.scss';

class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: document.body.clientWidth,
      blogs: [
        [
          {blogId: 1, type: 'header', content: 'Good to Go Stores'},
          {blogId: 1, type: 'cover', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 1, type: 'date', content: 'June 10, 2017'},
          {blogId: 1, type: 'paragraph', content: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'},
          {blogId: 1, type: 'header', content: 'This is a  header'},
          {blogId: 1, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel '},
          {blogId: 1, type: 'image', w: 'calc(40% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 1, type: 'image', w: 'calc(60% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 1, type: 'header', content: 'Another  header'},
          {blogId: 1, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum'},
          {blogId: 1, type: 'image', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 1, type: 'image', w: '100%', h: 298, column: 2, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'}
        ],
        [
          {blogId: 2, type: 'header', content: 'Good to Go Stores'},
          {blogId: 2, type: 'cover', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 2, type: 'date', content: 'June 10, 2017'},
          {blogId: 2, type: 'paragraph', content: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'},
          {blogId: 2, type: 'header', content: 'This is a  header'},
          {blogId: 2, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel '},
          {blogId: 2, type: 'image', w: 'calc(40% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 2, type: 'image', w: 'calc(60% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 2, type: 'header', content: 'Another  header'},
          {blogId: 2, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum'},
          {blogId: 2, type: 'image', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 2, type: 'image', w: '100%', h: 298, column: 2, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'}
        ],
        [
          {blogId: 3, type: 'header', content: 'Good to Go Stores'},
          {blogId: 3, type: 'cover', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 3, type: 'date', content: 'June 10, 2017'},
          {blogId: 3, type: 'paragraph', content: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'},
          {blogId: 3, type: 'header', content: 'This is a  header'},
          {blogId: 3, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel '},
          {blogId: 3, type: 'image', w: 'calc(40% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 3, type: 'image', w: 'calc(60% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 3, type: 'header', content: 'Another  header'},
          {blogId: 3, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum'},
          {blogId: 3, type: 'image', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 3, type: 'image', w: '100%', h: 298, column: 2, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'}
        ],
        [
          {blogId: 4, type: 'header', content: 'Good to Go Stores'},
          {blogId: 4, type: 'cover', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 4, type: 'date', content: 'June 10, 2017'},
          {blogId: 4, type: 'paragraph', content: 'Clean, friendly convenience. Good 2 Go Stores provides a family-friendly destination for travelers to refuel and restock on snacks, beverages, and other convenience items. Our bathrooms are clean, our staff are friendly, and our product offerings bathrooms are clean, our staff are friendly, and our product offerings.'},
          {blogId: 4, type: 'header', content: 'This is a  header'},
          {blogId: 4, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel '},
          {blogId: 4, type: 'image', w: 'calc(40% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 4, type: 'image', w: 'calc(60% - 25px)', h: 150, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 4, type: 'header', content: 'Another  header'},
          {blogId: 4, type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy. Lorem ipsum dolor sit amet... Lorem ipsum'},
          {blogId: 4, type: 'image', w: '100%', h: 298, column: 1, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'},
          {blogId: 4, type: 'image', w: '100%', h: 298, column: 2, content: 'https://static01.nyt.com/images/2010/11/04/business/1104Bucks-GasNozzle/1104Bucks-GasNozzle-blogSpan.jpg'}
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

    return (
      <section className="Blog">
        {this.state.width > 600 ? (
          <BlogDesktop goHome={this.props.goHome}
            isHome={this.props.isHome} blogs={this.state.blogs}
            curBlog={this.props.curBlog} storeBlog={this.props.storeBlog}
            blogIndex={this.props.blogIndex} updBlogIndex={this.props.updBlogIndex} />
        ) : (
          <BlogMobile goHome={this.props.goHome}
            isHome={this.props.isHome} blogs={this.state.blogs}
            curBlog={this.props.curBlog} storeBlog={this.props.storeBlog}
            blogIndex={this.props.blogIndex} updBlogIndex={this.props.updBlogIndex}/>
        )}
      </section>
    )
  }
}

export default Blog;
