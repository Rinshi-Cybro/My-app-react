import './App.css';
import logo from './logo.svg';
import ClassComp1 from './components/ClassComponent';
import FunComponent from './components/FuntnComponent';


function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2> Hello Prosevo </h2>
        <ClassComp1/>
        <FunComponent/>
    </div>
  );
}

export default App;
