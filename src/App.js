import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Timer from "./Timer";
import HighScores from "./HighScores";

class App extends Component {
  constructor() {
    super();
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSubmitclick = this.handleSubmitclick.bind(this);
    this.state = {
      username: "",
      isLoggedIn: false,
    };
  }

  //set isLoggedIn to true after a name has been entered
  handleLoginClick(newUserName) {
    this.setState({
      isLoggedIn: false,
      username: newUserName,
    });
  }

  //set isLoggedIn to true after a name has been entered
  handleSubmitclick(newUserName) {
    this.setState({
      isLoggedIn: true,
      username: newUserName,
    });
  }

  render() {
    const userName = this.state.username;
    return (
      <div className="App wrapper">
        <h1>Welcome to The Button</h1>

        {/* show the login component on page load and if the name hasn't been entered*/}
        {this.state.isLoggedIn ? (
          ""
        ) : (
          <Login
            value={userName}
            onValChange={this.handleLoginClick}
            onSubmit={this.handleSubmitclick}
          />
        )}

        {/* show the Timer component next along with previous High Scores*/}
        {this.state.isLoggedIn ? <Timer value={this.state.username} /> : null}
        {this.state.isLoggedIn ? <HighScores /> : null}
      </div>
    );
  }
}

export default App;
