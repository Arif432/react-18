import "./index.css"

export const Book = (props) =>{
  // object come with id we ignore
  const {get , author , names ,id ,number} = props
  
  return(

    <article className='eachBook'>
        <h3>#{number+1}</h3>
        <h1>{names}</h1>
        <h6>{author}</h6>
      <button onClick={()=>get(id)}>click</button> 
    </article>
  )
}
