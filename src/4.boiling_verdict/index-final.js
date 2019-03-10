import React, { Component } from "react";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      temperature: e.target.value,
      scale: e.target.dataset.scale
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'c' ? temperature : tryConvert(temperature,toCelsius);
    const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature,toFahrenheit);
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onChange={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onChange={this.handleChange}
        />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

class TemperatureInput extends Component {
  render() {
    const temperature = this.props.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[this.props.scale]} :</legend>
        <input
          value={temperature}
          data-scale={this.props.scale}
          onChange={this.props.onChange}
        />
      </fieldset>
    );
  }
}


export default Calculator;
