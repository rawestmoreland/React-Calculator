import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import ClearButton from './components/ClearButton/ClearButton'
import {create, all} from 'mathjs'

const math = create(all)

class App extends Component {
  state = {
    input: ""
  };

  handleChange = val => {
    this.setState({
      input: (val === "clear") ? "" : this.state.input + val
    })
  }

  handleEqual = val => {
    this.setState({
      input: math.eval(this.state.input)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.handleChange}>7</Button>
            <Button handleClick={this.handleChange}>8</Button>
            <Button handleClick={this.handleChange}>9</Button>
            <Button handleClick={this.handleChange}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleChange}>4</Button>
            <Button handleClick={this.handleChange}>5</Button>
            <Button handleClick={this.handleChange}>6</Button>
            <Button handleClick={this.handleChange}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleChange}>1</Button>
            <Button handleClick={this.handleChange}>2</Button>
            <Button handleClick={this.handleChange}>3</Button>
            <Button handleClick={this.handleChange}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.handleChange}>.</Button>
            <Button handleClick={this.handleChange}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.handleChange}>-</Button>
          </div>
          <ClearButton handleClick={this.handleChange}>clear</ClearButton>
        </div>
      </div>
    )
  }
}

export default App;
