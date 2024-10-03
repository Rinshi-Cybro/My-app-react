import React from 'react'



function ConditionRend() {
    let number = 0;
    let isloggedin = true;
  return (
    <div>
        <h3 className='bg-success text-white'> Condition Rendering / Ternary Operator</h3>
        {/* <p> condition rendering in React works the  same way conditions work in JavaScript. <br/>
            use JavaScript operators  
        </p> */}

        { number >0? <h4>Positive number</h4> : number <0? <h4>Negative number</h4> : <h4>number is Zero</h4>}

        { isloggedin ? <h4>Welcome to World</h4> : <h4> Please Login</h4>}
    </div>
  )
}

export default ConditionRend