import ReactDOM from 'react-dom/client';
import React, { useState , useEffect } from 'react';

const API = "https://api.github.com/users/quincyLarson"
// data coming as object

const GitUsers = () =>{
    // const [load , setLoad] = useState(true)

    const [userData , setUserData] = useState(null);

  useEffect(()=>{
    const fetchUser = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json()
            console.log(data);
        // setUserData(data)
        } catch (error) {
            console.log(error);
        }
    }
    fetchUser()
  },[])


  return(
    <section>
        <h1>fetchUser</h1>

     {/* <div>
     {userData.map((user)=>{
        const {id, login ,avatar_url , html_url} = user

        return <section key={id}>
                <img  src={avatar_url} alt={login}/>
                <h1>{html_url}</h1>
            </section>
     })}
     </div> */}
    </section>
  )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<GitUsers/>)