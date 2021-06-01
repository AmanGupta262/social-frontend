import React from "react";

import { Sidebar, Feed, Rightbar, Navbar } from "../";

function Home(props) {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
