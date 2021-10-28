import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

import Header from './Header.compoment';
import {capitializeName} from './capitializeName';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myState: "Hello World",
      myName: "Angel",
      myChild: "Test"
    }
    this.changeMyState = this.changeMyState.bind(this);
  }

  changeMyState(event) {
    console.log("regular Method", this);
    event.preventDefault();
    this.setState({myState: "Goodbye World"})
  }

  changeMyName = (event) => {
    console.log("arrow method", this);
    event.preventDefault();
    this.setState({myName: "Bob Belcher"});
  }

  methodOnApp = event => {
    console.log("methodOnApp", this);
    event.preventDefault();
    this.setState({myChild: "Gene Belcher"});
  }

  render() { 
    return (
      <div>
        <h1>{this.state.myState} of React!</h1>
        <Header 
          myName={this.state.myName}
          methodOnApp={this.methodOnApp}>  
          {capitializeName(this.state.myChild)}
        </Header>
        <button onClick={this.changeMyState}>Change my State</button>
        <button onClick={this.changeMyName}>Change my Name</button>
      </div>
    );
  }
}
 
export default App;
