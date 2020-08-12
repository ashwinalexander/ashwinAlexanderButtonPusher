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
        <div className="flexColumn">
          <div>
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
      </div>
    );
  }
}

export default Login;
