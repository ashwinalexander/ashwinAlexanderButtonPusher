import React, { Component } from "react";
import firebase from "./Firebase";

//the High Scores component - visible once the player enters his name and "logs in"
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
      <div className="scoreComponent">
        <h3>High Scores</h3>​ ​
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
        <p>Note: Top 10 scores appear in real-time in the list above</p>​ ​
      </div>
    );
  }
}

export default HighScores;
