// const allNames = ["arif","iqra","ahmad"];
// const newNames = allNames.map((name)=>{
//   return <h1>{name}</h1>
// })
import ReactDOM from 'react-dom/client';
import React from 'react';

const booksInfo = [
  {
    id : 1,
    names :"book1",
    author : "auth1"
  },
  {
    id : 2,
    names :"book2",
    author : "auth2"
  },
  {
    id : 3,
    names :"book3",
    author : "auth3"
  }
]

const BookList = ( ) =>{
  let arr = ['s' ,'a','d']
  console.log(...arr,"asda");

  let obj = {names:1 , n2:3};
  // copy wh
  let newObj = {...obj , n3:4}

  return(
      <section>
        {booksInfo.map((singleBook)=>{
          // here
          return (<Book {...singleBook} key={singleBook.id}/>)
        })}
      </section>
  )
}



const Book = (props) =>{
  // object come with id we ignore
  const {names , author} = props
 
  console.log(props); 
  return(
    <article>
      <h1>{names}</h1>
      <h6>{author}</h6>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)