import React, { Component, cloneElement } from 'react';
import Nav from './components/Nav/Nav';
import './reset.scss';
import './main.scss';

class App extends Component {

  render() {

    var childrenWithProps = cloneElement(
      this.props.children, {isUser: false}
    );

    return (
      <section className="App">
        <Nav router={this.props.router} />
        {childrenWithProps}
      </section>
    )
  }
}

export default App;
