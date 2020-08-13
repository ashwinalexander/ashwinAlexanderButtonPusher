import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  handleClick = () => {
    this.setState({
      // visitors: this.state.visitors +1;
      userName: "",
    });
  };

  render() {
    return (
      <div className="loginComponent">
        <div>
          <ul>
            <li>the button can only be clicked once.</li>
            <li>the button demands patience.</li>
            <li>your patience will be rewarded</li>
            <li>be advised there are impatient bots.</li>
          </ul>
        </div>
        <div className="flexColumn">
          <form action="submit" className="flexColumn">
            <label htmlFor="playerName">Enter Name:</label>
            {/* use anonymous functions if passing arguments */}
            <input
              onChange={this.handleChange}
              value={this.state.userName}
              placeholder="enter name"
              type="text"
              id="playerName"
              required
            />
            <button onClick={this.handleClick}>START</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
