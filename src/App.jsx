import React, { Component } from "react";

import Navbar from "./components/Navbar.jsx";
import MessageList from "./components/MessageList.jsx";
import Chatbar from "./components/Chatbar.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MessageList />
        <Chatbar />
      </div>
    );
  }
}

export default App;
