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


  constructor(props){
    super(props);
    this.state = {
      temperature : 0
    }
  }

  temperatureChange = (value,scale) => {
      console.log(value);
      this.setState({
        temperature : value,
        scale : scale
      })
  }

  render() {    

    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius = scale === "c" ? temperature : tryConvert(temperature,toCelsius);
    const fahrenheit = scale === "f" ? temperature : tryConvert(temperature,toFahrenheit);

    return (
      <React.Fragment>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.temperatureChange}/>
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.temperatureChange}/>
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </React.Fragment>
    );
  }
}

class TemperatureInput extends React.Component{

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value,this.props.scale);
  }

  render(){
    const temperature = this.props.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />      

      </fieldset>
    );
  }
}

export default Calculator;
