import React, { Component } from "react";


const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      type : 'c'

    };
  }

  changeTemperature = (temperature,type) =>{
    this.setState(
      {
        temperature: temperature,
        type : type
      });
  }

  render() {
    const temperature = this.state.temperature;
    const type = this.state.type;
    const celsius = type === "c" ? temperature : tryConvert(temperature,toCelsius);
    const fahrenheit = type === "f" ? temperature : tryConvert(temperature,toFahrenheit);
    return (
      <React.Fragment>
        <TemperatureInput type="c" temperature={celsius} temperatureChangeEvent = {this.changeTemperature}/>
        <TemperatureInput type="f" temperature={fahrenheit} temperatureChangeEvent = {this.changeTemperature}/>
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </React.Fragment>
    );
  }
}

class TemperatureInput extends React.Component{

  inputOnChange = (event) => {
    this.props.temperatureChangeEvent(
      event.target.value,
      this.props.type
    );
  }

  render(){   

    return (<fieldset>
      <legend>Enter temperature in {scaleNames[this.props.type]}:</legend>
      <input
        value={this.props.temperature}
        onChange={this.inputOnChange} />

    </fieldset>);
  }
}

export default Calculator;
