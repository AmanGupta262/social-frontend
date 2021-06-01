import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { fetchPosts } from '../../actions/posts'
import { Home, Login, Register } from '..';
import './app.css';


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    console.log("Props: ", this.props);
    return (
      <div>
        <Router>
          <Switch>
            <Router exact path="/">
              <Home />
            </Router>
            <Router path="/login">
              <Login />
            </Router>
            <Router path="/register">
              <Register />
            </Router>
          </Switch>
        </Router>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(App);
