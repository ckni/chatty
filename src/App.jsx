import React, { Component } from "react";

import Navbar from "./components/Navbar.jsx";
import MessageList from "./components/MessageList.jsx";
import Chatbar from "./components/Chatbar.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {
        name: ""
      },
      lastUser: {
        name: ""
      },
      userCount: 0,
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
            content: content.target.value,
            type: "textMessage"
          };

          if (newMessage.content) {
            this.state.socket.send(JSON.stringify(newMessage));
            content.target.value = "";
          }
        }
      },
      buttonSendMessage: () => {
        const newMessage = {
          username: this.state.currentUser.name || "Anonymous",
          content: document.getElementsByClassName("chatbar-message")[0].value,
          type: "textMessage"
        };

        if (newMessage.content) {
          this.state.socket.send(JSON.stringify(newMessage));
          document.getElementsByClassName("chatbar-message")[0].value = "";
        }
      },
      setUser: (content) => {
        const currentUser = this.state.currentUser;
        const newUser = { name: content.target.value };

        if (currentUser.name !== newUser.name) {
          const message = {
            username: "Chatty",
            content: `${currentUser.name || "Anonymous"} has set username to ${newUser.name || "Anonymous"}`,
            type: "nameChange"
          };

          this.state.socket.send(JSON.stringify(message));
          this.setState({ lastUser: currentUser });
          this.setState({ currentUser: newUser });
        }
      },
      clearHistory: () => {
        this.setState({ messages: [] });
      },
      socket: new WebSocket("ws://localhost:3001")
    };

    this.state.socket.onmessage = msg => {
      const newMessage = JSON.parse(msg.data);
      const messages = this.state.messages.concat(newMessage);
      switch(newMessage.type) {
        case "textMessage":
          this.state.notificationSound.play();
          this.setState({ messages: messages });
          break;
        case "nameChange":
          this.setState({ messages: messages });
          break;
        case "userCount":
          this.setState({ userCount: newMessage.content });
      }
      if (newMessage.type === "textMessage") {
        this.state.notificationSound.play();
      }

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
        <Navbar userCount={ this.state.userCount }/>
        <MessageList messages={ this.state.messages }/>
        <Chatbar username={ this.state.currentUser.name } sendMessage={ this.state.sendMessage } setUser={ this.state.setUser } buttonSendMessage={ this.state.buttonSendMessage } clearHistory={ this.state.clearHistory}/>
      </div>
    );
  }
}

export default App;
