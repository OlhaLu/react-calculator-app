import React, { Component } from 'react';
import ResultsCalculator from './components/ResultsCalculator';
import KeysCalculator from "./components/KeysCalculator";
import styled from 'styled-components';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = event => {
    if (event === "=") {
      this.calculate()
    }
    else if (event === "C") {
      this.reset()
    }
    else if (event === "CE") {
      this.backspace()
    }
    else if (event === "%") {
      this.inputPercent()
    }
    else if (event === "±") {
      this.toggleSign()
    }
    else {
      this.setState({
        result: this.state.result + event
      })
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  inputPercent() {
    const { result } = this.state
    const currentValue = parseFloat(result)

    if (currentValue === 0)
      return

    const fixedDigits = result.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(result) / 100

    this.setState({
      result: String(newValue.toFixed(fixedDigits.length + 2))
    })
  }

  toggleSign() {
    const { result } = this.state
    const newValue = parseFloat(result) * -1

    this.setState({
      result: String(newValue)
    })
  }

  render() {
    return (
      <CalculatorBlock>
        <Header>Calculator</Header>
        <ResultsCalculator result={this.state.result} />
        <KeysCalculator onClick={this.onClick} />
      </CalculatorBlock>
    );
  }
}

export default App;


const CalculatorBlock = styled.div`
  width: 470px;
  border: 2px solid green;
  border-radius: 12px;
  margin: auto;
  padding: 20px 20px 80px 20px;
`

const Header = styled.h2`
text-align: center;
margin 0 auto;
font-size: 2em;
`