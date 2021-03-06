import React, { Component } from 'react';

import Header from './components/header/index';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './redux/actions';
import './app.scss';

const tempArr = [{
  fname: "Mario",
  lname: "Carande",
  email: "mdc.mariio@gmail.com",
  age: 24,
  onlineStatus: true,
}];

const initialState = {
  hideBtn: false
};

class App extends Component {
  state = { ...initialState };

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  }

  exampleMethod_updatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  exampleMethod_returnAValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch.bind(this),
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render" tempArr={tempArr} />
          {!hideBtn &&
            <SharedButton {...configButton} />
          }
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                }
                return (
                  <ListItem key={index} {...configListItem} />
                )
              })}
            </div>
          }
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
