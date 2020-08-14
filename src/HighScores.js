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
    const dbRef = firebase.database().ref("users");

    dbRef
      .orderByChild("score")
      .limitToLast(10) //only get the highest 10 scores
      .on("value", (snapshot) => {
        const data = snapshot.val();
        const latestHighScorers = [];

        for (let propertyName in data) {
          const highScorerObject = {
            id: propertyName,
            user: data[propertyName],
          };

          latestHighScorers.push(highScorerObject);
        }

        this.setState({
          highScores: latestHighScorers,
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
                  {oneOfMyScores.user.name} - {oneOfMyScores.user.score}
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
