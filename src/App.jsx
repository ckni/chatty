import React, { Component } from "react";

import Navbar from "./components/Navbar.jsx";
import MessageList from "./components/MessageList.jsx";
import Chatbar from "./components/Chatbar.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {
        name: null
      },
      messages: [
        {
          id: 0,
          username: "Chatty",
          content: "Welcome to Chatty!",
        }
      ],
      notificationSound: new Audio("https://notificationsounds.com/message-tones/get-outta-here-505/download/mp3"),
      sendMessage: (content) => {
        if (content.keyCode === 13) {
          const newMessage = {
            username: this.state.currentUser.name || "Anonymous",
            content: content.target.value
          };

          if (newMessage.content) {
            this.state.socket.send(JSON.stringify(newMessage));
            content.target.value = "";
          } else {
            alert("You cannot send an empty message");
          }
        }
      },
      buttonSendMessage: () => {
        const newMessage = {
          username: this.state.currentUser.name || "Anonymous",
          content: document.getElementsByClassName("chatbar-message")[0].value
        };

        if (newMessage.content) {
          this.state.socket.send(JSON.stringify(newMessage));
          document.getElementsByClassName("chatbar-message")[0].value = "";
        } else {
          alert("You cannot send an empty message");
        }
      },
      setUser: (content) => {
        const newUser = { name: content.target.value };
        this.setState({ currentUser: newUser });
      },
      socket: new WebSocket("ws://localhost:3001")
    };

    this.state.socket.onmessage = msg => {
      this.state.notificationSound.play();
      const newMessage = JSON.parse(msg.data);
      const messages = this.state.messages.concat(newMessage);
      this.setState({ messages: messages });
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
        <Chatbar username={ this.state.currentUser.name } sendMessage={ this.state.sendMessage } setUser={ this.state.setUser } buttonSendMessage={ this.state.buttonSendMessage } />
      </div>
    );
  }
}

export default App;
