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
    this.setState({
      playerName: event.target.value,
    });
    this.props.onValChange(event.target.value);
  };

  //on button click
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
        <div className="flexColumn">
          <form
            action="submit"
            className="flexColumn"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="enterPlayerName">ENTER PLAYER NAME</label>
            <input
              onChange={this.handleChange}
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
        <div>
          <ul>
            <li>
              You will soon meet
              <span class="stylisedButton"> the button</span> and a countdown
              timer.
            </li>

            <li>
              Press <span class="stylisedButton">the button</span> whenever you
              wish ... but not too soon.
            </li>
            <li>The button can only be pressed once.</li>
            <li>Be warned, there are bots who might reset the timer.</li>
            <li>
              Your score will be inversely proportional to how fast you press
              the button.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Login;
