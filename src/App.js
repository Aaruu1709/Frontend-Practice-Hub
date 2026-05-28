import logo from './logo.svg';
import './App.css';
import Lifecycle from './Components/ReactLifecycle/Lifecycle';
import FunctionalCaounter from './Components/ReactLifecycle/FunctionalCaounter';
import FunctionalCompLifecycleMethods from './Components/FunctionalCompLifecycleMethods';

function App() {
  return (
    <div className="App">
    <h1>App</h1>
    <Lifecycle/>
    <FunctionalCaounter/>
    <FunctionalCompLifecycleMethods/>
    </div>
  );
}

export default App;
