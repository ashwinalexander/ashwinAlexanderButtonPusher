import React, { Component } from "react";
import firebase from "./Firebase";

class HighScores extends Component {
  constructor() {
    super();
    this.state = {
      highScores: [],
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const latestHighScores = []; //temp array to store high scores

      for (let score in data) {
        const scoreObject = {
          id: score,
          scoreValue: data[score],
        };
        latestHighScores.push(scoreObject);
      }
      this.setState({
        highScores: latestHighScores,
      });
    });
  }

  render() {
    return (
      <div className="App wrapper">
        <h1>High Scores</h1>​ ​
        <ul>
          {this.state.highScores.map((oneOfMyScores) => {
            return (
              <li key={oneOfMyScores.id}>
                <p>
                  {oneOfMyScores.id} - {oneOfMyScores.scoreValue}
                </p>
                ​ ​
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default HighScores;
