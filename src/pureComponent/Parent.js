import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComponent from "./RegularComponent";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Khushboo",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Khushboo" });
    }, 2000);
  }
  render() {
    console.log("**************Parent Component**************");
    return (
      <div>
        <h1>Parent Component</h1>
        <PureComp name={this.state.name} />
        <RegularComponent  name={this.state.name}/>
      </div>
    );
  }
}

/**
 * Humne pehle ek Parent Component banaya. Usme dono tarah k components include kare. Regular bhi aur Pure bhi. Parent Component me ek state banane aur use componentDidMount me setTimeout laga kar update karwaya har 2 second me.Humne us state ko as prop paas kara dono components me. Fir to see how actully it's affecting we put log in render of every component. Then we saw ke pure component to ek hi baar call hua jabki regular aur parent 2 baar. 
 */