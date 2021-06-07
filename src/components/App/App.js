import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { fetchPosts } from "../../actions/posts";
import { Home, Login, Register } from '..';
import './app.css';
import React, { Component } from 'react';
import { authenticateUser } from '../../actions/auth';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');
    if(token){
      const user = jwtDecode(token);
      this.props.dispatch(authenticateUser({
        name: user.name,
        email: user.email,
        _id: user._id
      }));
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);