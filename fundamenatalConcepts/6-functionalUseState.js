import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

const ChangeName = () =>{
  const [count , setCount] = useState(0);

  const inc  = () =>{
      setCount((currState)=>{
        return currState + 1 
    })
      console.log(count);
  }

  return(
    <section>
      <h1>{count}</h1>
      <button onClick={()=> inc()}>inc</button>
    </section>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<ChangeName/>)