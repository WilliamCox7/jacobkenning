import React, { Component, cloneElement } from 'react';

class IsJake extends Component {

  componentDidMount() {
    if (!this.props.isJake) {
      this.props.router.push('/admin');
    }
  }

  render() {

    var childrenWithProps = cloneElement(
      this.props.children, {
        isUser: false,
        curEdit: this.props.curEdit,
        storeEdit: this.props.storeEdit,
        isJake: this.props.isJake,
        authJake: this.props.authJake,
        isHome: this.props.isHome,
        goHome: this.props.goHome,
        curWork: this.props.curWork,
        storeWork: this.props.storeWork,
        workIndex: this.props.workIndex,
        updWorkIndex: this.props.updWorkIndex,
        curBlog: this.props.curBlog,
        storeBlog: this.props.storeBlog,
        blogIndex: this.props.blogIndex,
        updBlogIndex: this.props.updBlogIndex
      }
    );

    if (this.props.isJake) {
      return (
        <div className="Admin">
          {childrenWithProps}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default IsJake;
