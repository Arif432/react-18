// const allNames = ["arif","iqra","ahmad"];
// const newNames = allNames.map((name)=>{
//   return <h1>{name}</h1>
// })
import ReactDOM from 'react-dom/client';
import React from 'react';

const BooksData = [
  {
    name:"one",
    author : "auth1"
  },
  {
    name:"twwo",
    author : "auth2"
  },
  {
    name:"three",
    author : "auth3"
  },
]


const BookList = () =>{
  return(
    <section>
      {BooksData.map((each)=>{
        return <Book {...each}/>
      })}
    </section>
  )
}

const Book = (props) =>{
  const {name , author} = props
  const display = () => console.log(name)
  return(
    <section>
      <h1>{name}</h1>
      <h6>{author}</h6>
      <button onClick={display}>display name</button>

    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)