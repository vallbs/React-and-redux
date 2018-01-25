import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validator from './Components/Validator';
import Char from './Components/Char';

class App extends Component {

  state = {
    inputText: ""
  }

  inputChangeHandler = (evt) => {
    this.setState({
      inputText: evt.target.value
    });
  }

  charClickedHandler = (index) => {
    const charArr = this.state.inputText.split("");
    charArr.splice(index, 1);

    this.setState({
      inputText: charArr.join("")
    });    
  }


  render() {
    const chars = this.state.inputText.split("").map((ch, index) => {
      return <Char clicked={this.charClickedHandler.bind(this, index)} character={ch} key={index}/>
    });

    return (
      <div className="App">
        <input 
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.inputText}/>
        <Validator 
          inputText={this.state.inputText}/>
        {chars}
      </div>
    );
  }
}
export default App;
