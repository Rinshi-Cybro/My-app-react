import React, { useState } from 'react';
import './MainBody.css';
import {Button, Accordion, Card, Container} from 'react-bootstrap';
import States from './States';
import ConditionRend from './ConditionRend';
import Keys from './Keys/Keys';
import Counter from './Counter/Counter';




function MainBody() {

  let [colour, setColour] = useState("Green");
  let [count, setCount] = useState(0);

  const changeColour = () => {
    setColour("Blue");
  }

  const IncrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }
  console.log('rendering')

  const State = [
    {name: "Kerala", language: "Malayalam", population: "3500000"},
    {name: "Tamilnad", language: "Tamil", population: "8500000"},
    {name: "Karnataka", language: "Telugu", population: "9500000"},
  ]


  // const clickEvent = () => {
  //   alert('Button clicked');
  // };

  // const dbclickEvent = (name) => {
  //   alert('Hello, I am ' + name);
  // };

  // const onChangeEvent = () => {
  //   alert('On change event');
  // };

  // const MouseOverEvent = () => {
  //   alert("You mouse over the element");
  // };

  return (
    <div className='main-body'>

      {/* <h2> Welcome to my App </h2>
      <p>This is a simple layout example using React functional components.</p><br/><br/>
      <h3 className='bg-success text-white w-50'>useState Hook in React</h3>
      <p>State:- State is an object that stores the values of properties of a component that could change.<br/>
        A State can be modified based on user action. And Every time state changes React re-render the component to the browser.</p>
      <p>Hook:- A Hook is a special function that lets you "hook into" React features.<br/>
        For example:- useState is a Hook that lets you add React state to function component.<br/>
        Hook allows function component to have access to state and other react features</p> */}

      <h3>My favourite colour is {colour}</h3>  
      <Button onClick={changeColour}  variant="primary">Change colour</Button><br/><br/>

      <h2> Counter is {count}</h2>
      <Button onClick={IncrementCount} className='m-2 bg-success'> + </Button>
      <Button onClick={decrementCount} className='m-2 bg-danger'> - </Button><br/><br/>
      <hr/>

      <Container>
        <States state = {State} />
        <hr/>
        <ConditionRend />
        <hr/>
        <Keys /> 
        <hr/>
        <Counter />
      </Container>

      {/* <Button onClick={clickEvent} variant="success">Click me</Button><br/><br/>
      <Button onDoubleClick={ () => dbclickEvent("Favas")} className="bg-warning text-dark">Double Click me</Button><br/><br/>
      <input type="text" onChange={onChangeEvent} /><br/><br/> */}
      {/* <h3 onMouseOver={MouseOverEvent} className="bg-primary text-dark"> Mouse Over the text</h3><br/><br/> */}

      {/* <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion><br/><br/>

      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200/300?grayscale" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}

    </div>
  );
}


export default MainBody