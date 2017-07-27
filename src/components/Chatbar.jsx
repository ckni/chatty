import React, { Component } from "react";

class Chatbar extends Component {
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Username (Optional)" defaultValue={ this.props.username } onBlur={ this.props.setUser } />
        <input className="chatbar-message" placeholder="Type something here" onKeyDown={ this.props.sendMessage } />
        <button className="chatbar-button" onClick={ this.props.buttonSendMessage }>Send</button>
        <button className="chatbar-button" onClick={ this.props.clearHistory }>Clear</button>
      </footer>
    );
  }
}

export default Chatbar;
