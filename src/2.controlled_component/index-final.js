import React, { Component } from "react";

class ControlledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "Some value here",
      fruit : "lime",
      formSubmitLabel: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnTextAreaChange = this.handleOnTextAreaChange.bind(this);
    this.handleOnSelectChange = this.handleOnSelectChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleOnChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnTextAreaChange(event) {    
    this.setState({
      address: event.target.value
    });
  }

  handleOnSelectChange(event){
    this.setState({
      fruit : event.target.value
    })
  }

  handleInputChange(event){
    const input = event.target;
    const name = input.name;
    const value = input.type === 'checkout' ? input.checked : input.value;
    console.log(name);
    this.setState({
        [name] : value
    })
  }

  handleOnSubmit(event) {
    this.setState(state => ({
      formSubmitLabel: state.address + " is submitted"
    }));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>{this.state.formSubmitLabel}</div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <br />
        </label>
        <label>
          Address :{" "}
          <textarea
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <select name="fruit" value={this.state.fruit} onChange={this.handleInputChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
        <input type="submit" value="Submit" />
        <br />
        {this.state.name},{this.state.address},
        {this.state.fruit}
      </form>
    );
  }
}

//Computed property
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names"

export default ControlledComponent;
