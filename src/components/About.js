import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h1 className="pt-28 text-center font-bold text-4xl">About us</h1>
        <UserClass name="First" />
      </div>
    );
  }
}

export default About;

/**
 * Order of Excuation for child components
 * 
 - Parent Constructor
 - Parent Render

 - First Child Constructor
 - First Child Render

 - Second Child Constructor
 - Second Child Render

 - Third Child Constructor
 - Third Child Render

 <Dom Updated - in single batch >

 - First Child Component Did Mount
 - Second Child Component Did Mount
 - Third Child Component Did Mount
 - Parent Component Did Mount
 */
