import React, { Component } from 'react'

 class CounterLifecycle extends Component {
componentDidUpdate(prevProps,prevState){
    console.log(prevProps.number)
    console.log(this.props.number);
    if(prevProps.number !== this.props.number){
        console.log("component updated")
    }
}

  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
export default CounterLifecycle;
//render componentmount, constructor itself and componentUpdate