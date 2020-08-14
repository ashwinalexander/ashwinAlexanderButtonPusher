import React, { Component } from "react";
import firebase from "./Firebase";

//the Tiner component - visible once the player enters his name and "logs in"
class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsVal: 60, //the timer will countdown from this value
      botInterrupt: this.generateWeightedRandomValue(), //an impatient bot will interrupt the countdown at this value
      message: "-",
      isGameOn: true,
    };
  }

  componentDidMount() {
    this.secondVal = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //ref: https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
  formatForDisplay(countDown) {
    let minutes = parseInt(countDown / 60, 10);
    let seconds = parseInt(countDown % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
  }

  //logic to generate a random time at which the impatient bot will reset the timer
  generateWeightedRandomValue() {
    //first pick a number between 0 and 59
    let randomValue = Math.floor(Math.random() * 60);

    //a random value that is more likely to be between 43 and 55 secs
    let weightedRandomValue =
      randomValue > 6
        ? Math.floor(Math.random() * (55 - 43 + 1) + 43)
        : Math.floor(Math.random() * (55 - 1 + 1) + 1);

    return weightedRandomValue;
  }

  //Countdown unless the timer matches the "interrupt" time in which case reset
  countdownOrReset(num) {
    if (num === this.state.botInterrupt) {
      num = 60;
      this.setState({
        botInterrupt: this.generateWeightedRandomValue(),
        message: "an impatient bot reset the timer",
      });
    } else {
      num--;
    }
    //clear any messages after three seconds
    if (num === 57) {
      this.setState({ message: "-" });
    }
    return num;
  }

  //the player clicked the button!
  handleClick = (event) => {
    clearInterval(this.secondVal);
    this.setState({
      message:
        this.props.value +
        ", you scored " +
        (60 - this.state.secondsVal) * 100 +
        " points",
    });

    if (this.state.isGameOn) {
      //Saving name and score to Firebase - this will only happen once.
      this.saveScoreToDB(this.props.value, (60 - this.state.secondsVal) * 100);
      this.setState({
        isGameOn: false,
      });
    }
  };

  tick() {
    this.setState({
      secondsVal: this.countdownOrReset(this.state.secondsVal),
    });
  }

  saveScoreToDB(name, score) {
    const dbRef = firebase.database().ref();
    let usersRef = dbRef.child("users");

    usersRef.push({ name, score });
  }

  render() {
    return (
      <div className="timerComponent">
        <div className="flexColumn">
          <div className="timerDisplay">
            <h2>{this.formatForDisplay(this.state.secondsVal)} </h2>
          </div>
          <div className="buttonHolder">
            <button onClick={this.handleClick}>CLICK</button>
          </div>
          <div className="messageHolder">
            <h3> {this.state.message} </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
