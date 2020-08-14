import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  // handleChange = (event) => {
  //   this.setState({
  //     {this.props.text}: event.target.value,

  //   });
  // };

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
              //onChange={this.handleChange}
              placeholder="enter name"
              // value={this.props.value}
              value={this.props.text}
              type="text"
              id="playerName"
              required
            />
            <button onClick={this.props.onClick}>START</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
