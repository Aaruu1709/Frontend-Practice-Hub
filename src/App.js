import logo from './logo.svg';
import './App.css';
import Lifecycle from './Components/ReactLifecycle/Lifecycle';
import FunctionalCaounter from './Components/ReactLifecycle/FunctionalCaounter';
import FunctionalCompLifecycleMethods from './Components/ReactLifecycle/FunctionalCompLifecycleMethods';
import UseStateEx1 from './Components/UseState/UseStateEx1';
import UseStateEx2 from './Components/UseState/UseStateEx2';
import ToggleFunction from './Components/HideShowToggle/ToggleFunction';
import HideShowPassword from './Components/HideShowToggle/HideShowPassword';
import DarkMode from './Components/HideShowToggle/DarkMode';
import ImageToggle from './Components/HideShowToggle/ImgeToggle';

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
    <ToggleFunction/>
    <HideShowPassword/>
    <DarkMode/>
    <ImageToggle/>
    </div>
  );
}

export default App;
