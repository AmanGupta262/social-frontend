import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { Home, Login, Register } from '..';
import './app.css';

function App(props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const url = 'https://social-nodejs-api.herokuapp.com/api/v1/posts';
    axios.get(url)
      .then(res => {
        const data = res.data.data;
        setPosts(data.posts);
      })
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home posts={posts} />
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

export default App;