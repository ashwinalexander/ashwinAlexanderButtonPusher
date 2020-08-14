import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      playerName: "", //saving the input player name to state
    };
  }

  //input textbox change
  handleChange = (event) => {
    console.log("coming here to handle change");
    this.setState({
      playerName: event.target.value,
    });
    this.props.onValChange(event.target.value);
  };

  //on button submit
  handleSubmit = (event) => {
    if (this.state.playerName.trim().length < 3) {
      return; //client side validation will show prompt
    }
    event.preventDefault();
    this.props.onSubmit(this.state.playerName);
  };

  render() {
    const userName = this.props.userName;
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
          <form
            action="submit"
            className="flexColumn"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="enterPlayerName">ENTER YOUR NAME</label>
            <input
              onChange={this.handleChange}
              placeholder="enter your name"
              //client-side player name validation
              pattern="^[A-Za-z0-9]{3,}$"
              title="enter alphanumeric values with at least three characters"
              value={userName}
              type="text"
              id="enterPlayerName"
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
