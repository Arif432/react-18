import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';

const ChangeName = () =>{
  const [count , setCount] = useState(0);

  const inc  = () =>{
    setTimeout(()=>{
        //1 change happens for the touches happened between time
        // setCount(count+1) 
        setCount((currState)=>{
          return currState + 1;
        })
    },3000)
  }

  const helloThere = () =>{
    alert('sad')
    //infinite loop => helloThere()
    // setCount(count+1)
  }

  // helloThere();

  return(
    <section>
      <h1>{count}</h1>
      {/* whole of the change name function executed whenever the btn cliked */}
      <button onClick={()=> inc()}>inc</button>
    </section>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<ChangeName/>)