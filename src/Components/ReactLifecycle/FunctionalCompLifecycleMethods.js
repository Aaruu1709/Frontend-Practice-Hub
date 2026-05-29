import React, { useEffect, useState } from "react";

const FunctionalCompLifecycleMethods = () => {

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // MOUNTING
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // UPDATING
  useEffect(() => {
    if (count > 0) {
      console.log("Component Updated");
    }
  }, [count]);

  // UNMOUNTING
  useEffect(() => {

    return () => {
      console.log("Component Unmounted");
    };

  }, [show]);

  return (
    <div style={{ padding: "20px" }}>
<hr/>
      <h1>Functional Component Lifecycle</h1>

      {
        show && <h2>Counter : {count}</h2>
      }

      <button onClick={() => setCount(count + 1)}>
        Updating
      </button>

      <br /><br />

      <button onClick={() => setShow(true)}>
        Mounting
      </button>

      <br /><br />

      <button onClick={() => setShow(false)}>
        Unmounting
      </button>

    </div>
  );
};

export default FunctionalCompLifecycleMethods;

// In this example, I demonstrated React lifecycle behavior using functional components and hooks.

// First, I imported useState and useEffect hooks from React.

// Inside the component, I created two state variables.

// The first state is count, which is used to store counter value.

// The second state is show, which is used to show or hide the component.

// For state management, I used useState hook.

// After that, I implemented lifecycle phases using useEffect hook.

// The first useEffect is for mounting phase.

// useEffect with empty dependency array executes only once when the component loads for the first time.

// It behaves like componentDidMount in class components.

// Inside it, I printed "Component Mounted" in console.

// The second useEffect is for updating phase.

// This useEffect depends on count state.

// Whenever count changes, this useEffect executes and prints "Component Updated".

// This behaves like componentDidUpdate in class components.

// The third useEffect is for unmounting phase.

// Inside useEffect, I returned a cleanup function.

// This cleanup function executes before component removal from DOM.

// It behaves like componentWillUnmount in class components.

// For UI, I displayed counter value conditionally using show state.

// I created three buttons:
// one for updating count,
// one for mounting,
// and one for unmounting the component.

// When user clicks Updating button,
// count increases and updating lifecycle executes.

// When user clicks Mounting button,
// component becomes visible.

// When user clicks Unmounting button,
// component hides and cleanup function executes.

// So using useEffect hook,
// we can achieve mounting, updating, and unmounting lifecycle behavior in functional components.

// Nowadays functional components with hooks are preferred over class components because they provide cleaner and reusable code.