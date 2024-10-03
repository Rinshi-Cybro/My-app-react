import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import MainBody from './components/MainBody';
import Footer from './components/Footer';

// import logo from './logo.svg';
// import ClassComp1 from './components/ClassComponent';
// import FunComponent from './components/FuntnComponent';



function App() {

  // let name = 'Smith';
  // let a = 20;
  // let b = 40;

  // const Message = () => {
  //   return "Good Morning";
  // }

  return (
    <React.Fragment>
      <div className='App'>
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <h1 style={{color: "red"}}> Hello Prosevo </h1>
        <h2 style={{color:"blue"}}>My name is {name} </h2>
        <h4>{a + b}</h4>
        <h3> {Message()} </h3>
        <h3>JSX - JavaScript Syntax Extention / JavaScript XML</h3>
        <p>It is a React extention to the JavaScript language. Used in React easily write HTML & JavaScript together.</p> */}
        {/* <ClassComp1/>
        <FunComponent/> */}

        <Header/>
        <div className='body-style'>  
          <Sidenav/>
          <MainBody/>
        </div>
        
        <Footer/>
      </div>  
    </React.Fragment>
  );
}

export default App;
