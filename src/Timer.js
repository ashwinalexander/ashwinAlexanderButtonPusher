import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsVal: 60, //the timer will countdown from this value
      botInterrupt: this.generateWeightedRandomValue(), //an impatient bot will interrupt the countdown at this value
    };
  }

  componentDidMount() {
    // this.timerID = setInterval(() => this.oldtick(), 1000);
    this.secondVal = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  formatForDisplay(timer) {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
  }

  //the impatient bots are more likely (9 times out of 10) to show up between 55 and 41 secs
  //the impatient bots are less likely (1 times out of 10) to show up between 55 and 1 secs
  generateWeightedRandomValue() {
    //first pick a number between 0 and 59
    let randomValue = Math.floor(Math.random() * 60);

    //next, if the value is greater than 6 seconds, return a random number between 55 and 41 secs
    //if the value is lesser than 6 seconds, return a random number between 59 and 1 secs
    let weightedRandomValue =
      randomValue > 6
        ? Math.floor(Math.random() * (55 - 41 + 1) + 41)
        : Math.floor(Math.random() * (55 - 1 + 1) + 1);
    return weightedRandomValue;
  }

  assignRandomValue(num) {
    return num === this.botInterrupt ? 60 : num - 1;
  }

  tick() {
    this.setState({
      secondsVal: this.assignRandomValue(this.state.secondsVal),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, timer world!</h1>
        <h2>It is {this.state.secondsVal}.</h2>
      </div>
    );
  }
}

export default Timer;
