import React from 'react';
import './States.css';



// function States({name, language, population}) {  // Destructuring     
// function States(props) {                        // using props method
function States({ state }) {                         // using Map method() 
  return (
    <div className="m-2 ">
        <h3>React Props & State</h3><br/>
        {/* <p>Props stands for properties. Props are arguments passed into react components.
          It is similar to function arguments. And it is read only. <br/>
          We use props in react to pass data from one component to another component
          (from  a parent component to a child component). 
        </p> */}

        {/* using props properties */}
        {/* <h4 className='mb-2'> {props.name} </h4>
        <h5> Language: {props.language} </h5>
        <h5> Populatin: {props.population} </h5> */}

        {/* Using Destructuring */}
        {/* <h4 className='mb-2'> {name} </h4>
        <h5> Language: {language} </h5>
        <h5> Populatin: {population} </h5> */}

        {/* using Map method */}
        {state.map((st) => (
            <div className='bg-info mb-3 p-2'>
              <h5 className=''> {st.name} </h5>
              <h6> Language: {st.language} </h6>
              <h6> Populatin: {st.population} </h6>
            </div>
        ))}
    </div>
  );
};


export default States