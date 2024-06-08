import React from 'react'
import { useState, useEffect } from 'react';

function ApiCall() {
    const [state, setState]= useState([]);
    const api= "https://jsonplaceholder.typicode.com/posts";

    useEffect(()=>{
        const fetch1 = async ()=>{

       
        try{
        const res= await fetch(api);
        const data= await res.json();
        
        setState(data);
        console.log(state);
        }catch (e){
            console.log(e);
        } }
        fetch1 ();
    }
         , []
);
    
    

  return (
    <div>
    {state.length > 0 ? (
      <ul>
        {state.map((post) => (
          <li className='bg-pink-300 block m-5' key={post.id}>{post.body}</li>
        ))}
      </ul>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}

export default ApiCall