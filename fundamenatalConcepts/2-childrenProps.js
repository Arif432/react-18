
import ReactDOM from 'react-dom/client';
import React from 'react';

const fBook = 
  {
    b : "b1",
    a : "a1"
  }

  const sBook = 
  {
    b : "b2",
    a : "a2"
  }

const BookList = () =>{
  return(
    <section>
      <Book {...fBook}>
        <button onClick={()=>console.log(fBook.b)}>fBook content</button>
      </Book>

      <Book {...sBook} />
    </section>
  )
}

const Book = (props ) =>{
  const {a,b,children}  = props
  return(
    <section>
      <h1>{a}</h1>
      <h1>{b}</h1>
      {children}

    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BookList/>)