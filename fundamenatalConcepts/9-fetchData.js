import ReactDOM from 'react-dom/client';
import React, { useState , useEffect } from 'react';

const API = "https://api.github.com/users"

const GitUsers = () =>{
    const [load , setLoad] = useState(true)
    const [users , setUser] = useState([]);

  useEffect(()=>{
    const fetchData = async () =>{
        const response = await fetch(API)
        // data coming as array
        const data = await response.json(); // get the data from the response
        setUser(data) // set the data to the state variable
    }
    fetchData()
  },[])


  return(
    <section>

     <div>
     {users.map((user)=>{
        const {id, login ,avatar_url , html_url} = user

        return <section key={id}>
                <img  src={avatar_url} alt={login}/>
                <h2>{html_url}</h2>
            </section>
     })}
     </div>
    </section>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<GitUsers/>)