
import ReactDOM from 'react-dom/client';
import React from 'react';

const Avatar = ({person,size}) =>{
   return (
    <section>
        <h1>{person.names}</h1>
        <h1>{size}</h1>
    </section>
   )
}

const Food = (prop) => {
  const {fruit , veg} = prop
  const {first , sec }= fruit
  return (
    <article>
      <h1>{first}</h1>
      <h1>{veg}</h1>
    </article>
  )
}

const Profile = () => {
    return (
        <section>
          <Avatar 
          person = {{names : "arf" , other : "idk"}}
          size={100}/>

          <Food fruit={{first:"grapes" , sec:"aaple"}} veg="potato"/>
        </section>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Profile/>)