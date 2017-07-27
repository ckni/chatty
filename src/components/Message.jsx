import React, { Component } from "react";


class Message extends Component {
  renderMessage() {
    switch(this.props.type) {
      case "nameChange":
        return (<span className="message-content system-message">{ this.props.content }</span>);
      default:
        return (<span className="message-content">{ this.props.content }</span>);
    }
  }

  render() {
    return (
      <div className="message">
        <span className="message-username">{ this.props.username }</span>
        {this.renderMessage()}
      </div>
    );
  }
}

export default Message;
