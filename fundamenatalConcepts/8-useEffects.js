import ReactDOM from 'react-dom/client';
import React, { useState , useEffect } from 'react';

const Effect = () =>{
  const [count , setCount] = useState(0);

  // not allowed
  // useEffect(async ()=>{
  //   await //data  
  // },[])

  // allowed
  // useEffect(()=>{
  //   const data = async () =>{
  //     await //some fetching
  //   }
  //   data()
  // },[])


  return(
    <section>
     
     <h1>useEffect</h1>
    </section>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Effect/>)