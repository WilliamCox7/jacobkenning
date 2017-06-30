import React, { Component, cloneElement } from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './reset.scss';
import './main.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHome: true
    }
    this.goHome = this.goHome.bind(this);
  }

  goHome(bool) {
    this.setState({isHome: bool});
  }

  render() {

    var childrenWithProps = cloneElement(
      this.props.children, {
        isUser: false,
        isHome: this.state.isHome,
        goHome: this.goHome
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
