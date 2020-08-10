import React, { Component, Fragment } from 'react';
import Login from './Login'
import './App.css';


// Pseudo code
// component1  - take in name, provide instructions, click submit and save to state, 
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
      username: ""
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
        <h1>the button</h1>

        <Login />
      </div>
    );
  }


}

export default App;
