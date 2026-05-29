import logo from './logo.svg';
import './App.css';
import Lifecycle from './Components/ReactLifecycle/Lifecycle';
import FunctionalCaounter from './Components/ReactLifecycle/FunctionalCaounter';
import FunctionalCompLifecycleMethods from './Components/ReactLifecycle/FunctionalCompLifecycleMethods';
import UseStateEx1 from './Components/UseState/UseStateEx1';
import UseStateEx2 from './Components/UseState/UseStateEx2';

function App() {
  return (
    <div className="App">
    <h1>App</h1>
    <Lifecycle/>
    <FunctionalCaounter/>
    <FunctionalCompLifecycleMethods/>
    <hr/>
    <UseStateEx1/>
    <UseStateEx2/>
    <hr/>
    </div>
  );
}

export default App;
