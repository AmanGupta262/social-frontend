import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions/posts'
import { Feed, Navbar, Sidebar, Rightbar, Login } from '..';
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
          {/* <Sidebar />
          <Feed posts={posts} />
          <Rightbar /> */}
          <Login />
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
