import React, { Component } from 'react'

export default class OwnPureComp extends Component {
    shouldComponentUpdate(nextProps, nextState){
      
        console.log(nextProps, nextState);
    }
  render() {
    return (
      <div>OwnPureComp - {this.props.name}</div>
    )
  }
}
