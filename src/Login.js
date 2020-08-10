import React, { Component } from "react";
import { Fragment } from "react";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <ul>
          <li>The Button can only be clicked once.</li>
          <li>Do not click The Button right away.</li>
          <li>
            Demonstrate more patience than the impatient bots who will also
            click The Button
          </li>
          <li>Do not click The Button right away.</li>
          <li>The longer you wait, the higher your score.</li>
        </ul>
        <div>
          <div>
            <form>
              <input type="text" placeholder="Enter Name" required></input>
              <button>CLICK</button>
            </form>
          </div>
          <div>
            <button>click</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
