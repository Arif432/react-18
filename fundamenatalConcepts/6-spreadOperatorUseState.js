import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';


const ChangeName = () =>{

  const [person ,setPerson] = useState({
    name : "peter",
    age : 22,
    hobby : "dev"
  })

  const setChanges = () =>{
    setPerson({...person , hobby : "kuch bh nahi" })
  }

  const {name , age , hobby} = person


  return(
    <section>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{hobby}</h1>

      <button onClick={() => setChanges()}>Apply Changes</button>

    </section>
  )


}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<ChangeName/>)