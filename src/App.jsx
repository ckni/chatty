import React, { Component } from "react";

import Navbar from "./components/Navbar.jsx";
import MessageList from "./components/MessageList.jsx";
import Chatbar from "./components/Chatbar.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {
        name: "Bob" // optional. if currentUser is not defined, it means the user is Anonymous
      },
      messages: [
        {
          id: 0,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 1,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ],
      sendMessage: (content) => {
        if (content.keyCode === 13) {
          this.state.socket.send(content.target.value);

          const newMessage = { id: Math.random(), username: this.state.currentUser.name, content: content.target.value };
          const messages = this.state.messages.concat(newMessage);

          content.target.value = "";

          this.setState({ messages: messages });
        }
      },
      setUser: (content) => {
        const newUser = { name: content.target.value };
        this.setState({ currentUser: newUser });
      },
      socket: new WebSocket("ws://localhost:3001")
    };
  }

  // componentDidMount() {
  //   console.log("Simulating incoming message");
  //   setTimeout(() => {
  //     const newMessage = { id: 3, username: "Michelle", content: "Hello there!"} ;
  //     const messages = this.state.messages.concat(newMessage);
  //     this.setState({ messages: messages });
  //   }, 3000);
  // }

  render() {
    return (
      <div>
        <Navbar />
        <MessageList messages={ this.state.messages }/>
        <Chatbar username={ this.state.currentUser.name } sendMessage={ this.state.sendMessage } setUser={ this.state.setUser } />
      </div>
    );
  }
}

export default App;
