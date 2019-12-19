import React, { Component } from 'react';

import Header from './components/header/index';
import Headline from './components/headline';
import './app.scss';

const tempArr = [{
  fname: "Mario",
  lname: "Carande",
  email: "mdc.mariio@gmail.com",
  age: 24,
  onlineStatus: true,
}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render" tempArr={tempArr} />
        </section>
      </div>
    )
  }
}

export default App;
