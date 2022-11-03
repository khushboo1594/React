import React, { Component } from "react";
import OwnPureComp from "./OwnPureComp";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Patel",
    };
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        name:"Patel"
      })
    },2000)
  }
  render() {
    console.log(" *****************Parent Compoment **************** ");
    return <>
    <h1>Parent Component</h1>
    <OwnPureComp name={this.state.name}/>
    </>;
  }
}
