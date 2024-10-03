import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Counter from './Counter/Counter';
import './MainBody.css';




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




  return (
    <div className='main-body'>


      <Container>
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