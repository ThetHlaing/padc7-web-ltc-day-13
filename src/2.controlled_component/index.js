import React, { Component } from "react";

class ControlledComponent extends Component {  

  render() {
    return (      
        <form action="http://www.google.com">
          <div />
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>      
    );
  }
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names"

export default ControlledComponent;
