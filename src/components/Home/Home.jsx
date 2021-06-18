import React from "react";

import { Sidebar, Feed, Rightbar, Navbar } from "../";

function Home(props) {
  const {id} = props.match.params;
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Feed postId={id} />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
