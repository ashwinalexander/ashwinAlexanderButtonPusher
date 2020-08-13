import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsVal: 60, //the timer will countdown from this value
      botInterrupt: this.generateWeightedRandomValue(), //an impatient bot will interrupt the countdown at this value
    };
    console.log(this.state.botInterrupt);
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

    //a random value that is more likely to be between 41 and 55 secs
    let weightedRandomValue =
      randomValue > 6
        ? Math.floor(Math.random() * (55 - 41 + 1) + 41)
        : Math.floor(Math.random() * (55 - 1 + 1) + 1);
    console.log("bot interrupt:" + weightedRandomValue);

    return weightedRandomValue;
  }

  countdownOrReset(num) {
    if (num === this.state.botInterrupt) {
      num = 60;
      this.setState({ botInterrupt: this.generateWeightedRandomValue() });
    } else {
      num--;
    }
    return num;
  }

  tick() {
    this.setState({
      secondsVal: this.countdownOrReset(this.state.secondsVal),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, timer world!</h1>
        <h2>It is {this.formatForDisplay(this.state.secondsVal)} </h2>
      </div>
    );
  }
}

export default Timer;
