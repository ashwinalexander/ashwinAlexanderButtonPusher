import React, { Component } from "react";
import firebase from "./Firebase";

class HighScores extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const newBooksArray = [];
      for (let propertyName in data) {
        const bookObject = {
          id: propertyName,
          book: data[propertyName],
        };
        newBooksArray.push(bookObject);
      }
      this.setState({
        books: newBooksArray,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>High Scores</h1>​ ​
        <ul>
          {this.state.books.map((oneOfMyBooks) => {
            return (
              <li key={oneOfMyBooks.id}>
                <p>
                  {oneOfMyBooks.book} - {oneOfMyBooks.id}
                </p>{" "}
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
