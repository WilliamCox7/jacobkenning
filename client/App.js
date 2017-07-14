import React, { Component, cloneElement } from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './src/jake-icons/css/icons.scss';
import './reset.scss';
import './main.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isJake: false,
      isHome: true,
      curWork: undefined,
      workIndex: undefined,
      curBlog: undefined,
      blogIndex: undefined
    }
    this.setJake = this.setJake.bind(this);
    this.goHome = this.goHome.bind(this);
    this.storeWork = this.storeWork.bind(this);
    this.updWorkIndex = this.updWorkIndex.bind(this);
    this.storeBlog = this.storeBlog.bind(this);
    this.updBlogIndex = this.updBlogIndex.bind(this);
  }

  setJake() {
    this.setState({isJake: !this.state.isJake});
  }

  goHome(bool) {
    this.setState({isHome: bool});
  }

  storeWork(work) {
    this.setState({curWork: work});
  }

  updWorkIndex(i) {
    this.setState({workIndex: i});
  }

  storeBlog(blog) {
    this.setState({curBlog: blog});
  }

  updBlogIndex(i) {
    this.setState({blogIndex: i});
  }

  render() {

    var childrenWithProps = cloneElement(
      this.props.children, {
        isJake: this.state.isJake,
        setJake: this.setJake,
        isHome: this.state.isHome,
        goHome: this.goHome,
        curWork: this.state.curWork,
        storeWork: this.storeWork,
        workIndex: this.state.workIndex,
        updWorkIndex: this.updWorkIndex,
        curBlog: this.state.curBlog,
        storeBlog: this.storeBlog,
        blogIndex: this.state.blogIndex,
        updBlogIndex: this.updBlogIndex
      }
    );

    return (
      <section className="App">
        <Nav router={this.props.router} goHome={this.goHome} />
        {childrenWithProps}
        <Footer />
      </section>
    )
  }
}

export default App;
