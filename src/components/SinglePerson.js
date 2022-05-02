import React from 'react'
import './SinglePerson.css'
function SinglePerson({id,nome,stato,img,rimuoviFunzione}) {
   
  return (
    <div className='person'>
        <div className='img-person'>
            <img src={img} />
        </div>
        <div className='info'>
            
            <h4>{nome}</h4>
                
            
            <p>{stato} </p>
        </div>
        <div className='remove-button' onClick={()=>{rimuoviFunzione(id)}}> X </div>   
        
    </div>
  )
}

export default SinglePerson