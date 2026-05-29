// MOUNTING

// constructor()
// ↓
// getDerivedStateFromProps()
// ↓
// render()
// ↓
// componentDidMount()


// UPDATING

// getDerivedStateFromProps()
// ↓
// shouldComponentUpdate()
// ↓
// render()
// ↓
// getSnapshotBeforeUpdate()
// ↓
// componentDidUpdate()


// UNMOUNTING

// componentWillUnmount()


//-----------------------------------------
// Good morning everyone.

// Today I am going to explain React lifecycle methods using class components.

// Lifecycle methods are methods that execute during different phases of a component.

// There are mainly three phases:
// Mounting,
// Updating,
// and Unmounting.

// --------------------------------------------------
// MOUNTING PHASE
// --------------------------------------------------

// Mounting means when component loads for the first time.

// In mounting phase,
// these methods execute in sequence:

// constructor()
// getDerivedStateFromProps()
// render()
// componentDidMount()

// --------------------------------------------------
// 1. constructor()
// --------------------------------------------------

// Constructor is the first lifecycle method that executes when component creates.

// It is mainly used for:
// - initializing state
// - binding methods
// - setting initial values

// Inside constructor,
// we must call super() because our component extends React Component class.

// Example:

// this.state = {
//    count: 0
// }

// --------------------------------------------------
// 2. getDerivedStateFromProps()
// --------------------------------------------------

// getDerivedStateFromProps is a static lifecycle method.

// It is used to update state based on incoming props.

// It executes before every render.

// This method returns either an object or null.

// Nowadays this method is rarely used in real projects.

// --------------------------------------------------
// 3. render()
// --------------------------------------------------

// Render method is responsible for displaying JSX on the UI.

// It is a mandatory lifecycle method in class components.

// Whenever state or props change,
// render() executes again.

// React converts JSX into browser understandable JavaScript using Babel.

// --------------------------------------------------
// 4. componentDidMount()
// --------------------------------------------------

// componentDidMount executes after component successfully renders on UI.

// It is mainly used for:
// - API calls
// - fetching data
// - timers
// - side effects

// This method executes only once after first render.

// --------------------------------------------------
// UPDATING PHASE
// --------------------------------------------------

// Updating phase happens whenever:
// - state changes
// OR
// - props change

// In updating phase,
// these methods execute:

// getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()

// --------------------------------------------------
// 5. shouldComponentUpdate()
// --------------------------------------------------

// shouldComponentUpdate controls component re-rendering.

// It returns:
// true -> component re-renders
// false -> component does not re-render

// This method is mainly used for performance optimization.

// --------------------------------------------------
// 6. getSnapshotBeforeUpdate()
// --------------------------------------------------

// getSnapshotBeforeUpdate executes before DOM updates.

// It is used to capture previous DOM values before update happens.

// This method is rarely used in normal applications.

// --------------------------------------------------
// 7. componentDidUpdate()
// --------------------------------------------------

// componentDidUpdate executes whenever state or props update.

// It receives:
// prevProps
// and prevState
// as parameters.

// Inside this method,
// we can compare old values with new values.

// It is mainly used for:
// - API calls after update
// - checking state changes
// - handling dynamic updates

// --------------------------------------------------
// UNMOUNTING PHASE
// --------------------------------------------------

// Unmounting means removing component from DOM.

// In unmounting phase,
// componentWillUnmount executes.

// --------------------------------------------------
// 8. componentWillUnmount()
// --------------------------------------------------

// componentWillUnmount executes before component removes from DOM.

// It is mainly used for cleanup operations like:
// - clearing timers
// - removing event listeners
// - cancelling API calls

// This prevents memory leaks in application.

// --------------------------------------------------
// CONCLUSION
// --------------------------------------------------

// So these lifecycle methods help us control component behavior during:
// - mounting
// - updating
// - unmounting
// phases in React class components.

// Nowadays functional components with hooks are preferred over class components in modern React development because they provide cleaner and reusable code.

// Thank you.