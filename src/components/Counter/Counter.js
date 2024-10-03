import React, { useState } from 'react';
import {Button, Accordion, Card, Container} from 'react-bootstrap';
import './Counter.css';




function Counter() {

    const Starting = 1;

    let [count, setCount] = useState(0);
    let [num, setNum] = useState(Starting);

    const Increment = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        setCount(count - 1);
    }

    const ChangeNumber = () => {
        setNum(num * Starting);
    }

  return (
    <div className='count-container'>

        <h2>React Counter App</h2>
        <div className='cont-start'>
            <h3>Counter is {count} </h3>
        </div>
        <div className='button-style'>
            <Button onClick={Increment} className='m-3 '> Increment </Button>
            <Button onClick={Decrement} className='m-3 '> Decrement </Button>
            <Button onClick={ ()=> setCount(0)} className='m-3'> Reset </Button>
        </div>
        <div className='count-input'>
            <label for ='step'> Step: </label>
            <input  type='number'  value={ChangeNumber}></input>
        </div>

    </div>
  )
}

export default Counter