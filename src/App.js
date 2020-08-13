import React, { Component } from "react";
import Login from "./Login";
import "./App.css";
import Timer from "./Timer";
import HighScores from "./HighScores";

//pseudo code
//component 1: take in name, provide instructions, press START, pass name to component 2
//component 2: start countdown timer, start function that has 1 bot running and counting down
//component 2: whenever user clicks, pass name and time to database
//component 3: connect to database, retrieve high scores.

//logic:
//1 on page load, show instructions, ask for name, get user to submit
//2 on button click, hide component 1, pass name to component 2
//2 start timer function but assign it a value it will reset at and say "an impatient bot clicked!"
//3 on button click, show a color with name in high scores - connect to databse and retrieve

// Pseudo code
// component1  - take in name, provide instructions, click submit and pass name as a prop to component 2
// component2  - timer, "click" button, bots running in bg
// component3 - high scores, pull from database show in real-time,
//  logic:
//  1. On page load - component 1 appears:
//  - ask for name with textbox
//  - show instructions
//  - show ready to play button
//  - on click save name to state, hide the first component and show the second component
//  2. Show timer that counts down, show click button, trigger bot that counts down to random number
//  3. on click, by bot, start bot again
//  4  on click, by human, end game, save score to db and show high scores along with team name.

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  componentDidMount() {
    // const dbRef = firebase.database().ref();
    // dbRef.on('value', (snapshot) => {
    //   const data = snapshot.val();
    //   const newBooksArray = [];
    //   for (let propertyName in data) {
    //     newBooksArray.push(data[propertyName]);
    //   }
    //   console.log(newBooksArray);
    //   this.setState({
    //     books: newBooksArray
    //   })
    // })
  }

  render() {
    return (
      <div className="App wrapper">
        <h1>the button</h1>
        <div className="headerer">
          <ul>
            <li>the button can only be clicked once.</li>
            <li>the button demands patience.</li>
            <li>your patience will be rewarded</li>
            <li>be advised there are impatient bots.</li>
          </ul>
        </div>
        <Login />
        <Timer />
        <HighScores />
      </div>
    );
  }
}

export default App;
