// three phases: mounting, updating and unmounting

// constructor is running at very first -before page load
// jsx->write html code in javascript
// Browser does not understand this jsx so for that babel transpiler it convert browser undertsandable form 
import React, { Component } from 'react'
import CounterLifecycle from './CounterLifecycle';

export default class Lifecycle extends Component {
//when we wnt to load something before page load then we go for constructor
    constructor(){
        super();
        this.state={count:0};
        console.log("constructor called")
        // usecase to achieve lifecycle:we take one button when we click button value will update  
    }
    componentDidMount(){
        console.log("componentDidMount:when component render first time ");
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }
    increment(){
        this.setState({count:this.state.count+1})
        //here this is not get so value can not updated,,it give error->TypeError: Cannot read properties of undefined (reading 'setState')
    
    }
    //render itself is also lifecycle method
    //render componnet
  render() {

    console.log("2.Render Method Called")
    return (
      <div>
        <h1>React lifecycle: using class component</h1>
        {/* <h2>{this.state.count}</h2> */}
        <CounterLifecycle number={this.state.count}></CounterLifecycle>
        {/* <button onClick={this.increment.bind(this)}>click me</button> */}
<button onClick={()=>this.increment()}>using arrow function</button>

      </div>
    )
  }
}
//before ecmascript 6, wee use bind so it bing with this and  will  updated value
//we can use bind or else we can use arrow function (after 5 in EcmaScript 6)too


//React lifecycle methods are the methods that execute during different phases of a component’s life.

// There are mainly three phases in the React lifecycle:
// Mounting, Updating, and Unmounting.

// In the mounting phase,
// constructor(), render(), and componentDidMount() execute.

// constructor() is called first.
// It is mainly used for:
// - initializing state,
// - binding methods,
// - and setting initial values.

// render() is responsible for displaying JSX(jsx means writing html code in javascript) on the UI.

// Whenever state or props change,
// render() executes again.

// componentDidMount() executes after the component is rendered successfully on the screen.
// It is mainly used for:
// - API calls,
// - fetching data,
// - subscriptions,
// - and side effects.

// In the updating phase,
// componentDidUpdate() executes whenever state or props change.

// componentDidUpdate() runs after every update.
// It receives previous props and previous state as parameters.

// We can compare old and new values inside it.

// In the unmounting phase,
// componentWillUnmount() executes before removing the component from the DOM.

// It is mainly used for cleanup operations such as:
// - clearing timers,
// - removing event listeners,
// - and cancelling API calls.

// So these lifecycle methods help us control component behavior during creation, updating, and removal phases in React class components.

// Nowadays, functional components with hooks are preferred over class components in modern React development.