import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      books: []
    }
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
      <div className="App">
        <h1>look a boookshelf</h1>
        {/* use a map instead of a foreach because the map RETURNS an array */}
        <ul>
          {
            this.state.books.map((book) => {
              return <li>{book}</li>
            })
          }
        </ul>


      </div>
    );
  }


}

export default App;
