import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { fetchPosts } from '../../actions/posts'
import { Feed, Navbar, Sidebar, Rightbar, Login, Register } from '..';
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
        {/* <Navbar /> */}
        <div className="container">
          <Router>
            <Switch>
              <Router exact path="/">
                
              </Router>
            </Switch>
          </Router>
        </div>
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
