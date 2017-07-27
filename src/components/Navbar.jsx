import React, { Component } from "react";

class Navbar extends Component {
  renderUserCount() {
      switch(this.props.userCount) {
        case 1:
          return (<span className="user-count">1 user online</span>);
        default:
          return (<span className="user-count">{ this.props.userCount } users online</span>);
      }
    }

  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        {this.renderUserCount()}
      </nav>
    );
  }
}

export default Navbar;
