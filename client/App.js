import React, { Component, cloneElement } from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './reset.scss';
import './main.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      curWork: undefined,
      workIndex: undefined
    }
    this.goHome = this.goHome.bind(this);
    this.storeWork = this.storeWork.bind(this);
    this.updWorkIndex = this.updWorkIndex.bind(this);
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

  render() {

    var childrenWithProps = cloneElement(
      this.props.children, {
        isUser: false,
        isHome: this.state.isHome,
        goHome: this.goHome,
        curWork: this.state.curWork,
        storeWork: this.storeWork,
        workIndex: this.state.workIndex,
        updWorkIndex: this.updWorkIndex
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
