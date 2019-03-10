import React, { Component } from "react";

class ControlledComponent extends Component {  

  constructor(props){
    super(props);

    this.state = {
      name : "PADC",
      address : "Yay Kyaw",
      class : "Web"
    }

  }input

  inputOnChange = (event) => {
    this.setState({
      name : event.target.value
    })
  }

  textareaOnChange = (event) => {
    this.setState({
      address : event.target.value
    })
  }

  selectOnChange = (event) => {
    this.setState({
      class : event.target.value
    })
  }

  onSubmitHandler = (event) => {
    alert(this.state.class + " is submitted");
    event.preventDefault();
  }

  render() {
    return (      
        <form onSubmit = {this.onSubmitHandler} action = "https://www.google.com">
          <div />
          <label>
            Name:
            <input 
            type="text" value={this.state.name} 
            onChange={this.inputOnChange} name="name" />
          </label>

          <lable>
            Address : 
            <textarea
            value = {this.state.address}
            onChange = {this.textareaOnChange}
            >name
            </textarea>
          </lable>

          <label>
          Class : 
          <select value={this.state.class} onChange={this.selectOnChange}>
            <option>Web</option>
            <option>iOS</option>
            <option> Android</option>
          </select>

          </label>

          <input type="submit" value="Submit" />
          <br/>{this.state.name}<br/>
          {this.state.address}<br/>
          {this.state.class}
        </form>      

        
    );
  }
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names"

export default ControlledComponent;
