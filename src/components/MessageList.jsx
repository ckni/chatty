import React, { Component } from "react";

import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    const listMessages = this.props.messages.map(message =>
      <Message key={ message.id } username={ message.username } content={ message.content } /> // TODO: Assign an ID to each message
    );
    return (
      <main className="messages">
        { listMessages }
      </main>
    );
  }
}

export default MessageList;
