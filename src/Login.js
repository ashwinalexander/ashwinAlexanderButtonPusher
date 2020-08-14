import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      username: event.target.value,
    });

    this.props.onValChange(event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  render() {
    const userName = this.props.username;
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
              placeholder="enter name"
              //error handling and name validation
              pattern="^[A-Za-z0-9]{3,}$"
              title="Please enter an alphanumeric value with at least three characters"
              value={userName}
              type="text"
              id="playerName"
              required
            />
            <button onClick={this.handleSubmit}>START</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
