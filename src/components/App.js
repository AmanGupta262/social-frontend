import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/posts'
import {PostList} from './';


class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const {posts} = this.props;
    console.log("Props: ", this.props);
    return (
      <PostList posts={posts} />
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(App);
