import React, { Component } from "react";

class Chatbar extends Component {
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue={ this.props.username } onInput={ this.props.setUser } />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyDown={ this.props.sendMessage } />
      </footer>
    );
  }
}

export default Chatbar;
