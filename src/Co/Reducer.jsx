// import React, { useState } from 'react'
import ReduxTool from './ReduxTool';
import Form1 from './Form1';

// import { useReducer, useDeferredValue } from 'react'

// const reducer= (state, action )=>{
//     switch(action.type){
//         case 'increment' :
//         return {...state, count : state.count +1};
        
//             case 'decrement' :
//             return {...state, count : state.count -1};
//             case 'reset':
//                 return { ...state , count: 0}
//                 case 'TgColor':
//                     return {...state, color: !state.color}
//                     case 'User':
//                         return {...state, userInput: action.payload}
//             default:
//                 throw new Error();
//     }
// } 

// const Reducer = () => {
//     const [state, dispatch]=useReducer(reducer, {count : 0, color:true, userInput: ""})
//     const [input, setInput]=useState();
//     const deferred= useDeferredValue(input)
    
//   return (
//     <div className={`flex space-x-7 items-center justify-center text-center ${state.color?'text-red-700 ':'text-green-700'}`}>
//         <input type="text" value={state.userInput} onChange={(e)=>dispatch({type: 'User', payload: e.target.value})} />
//         <p>{state.count}</p>
//         <button onClick={()=>dispatch({type: "increment"})}>increment</button>
//         <button onClick={()=>{dispatch({type: "decrement"})}}>decrement</button>
//         <button onClick={()=>{dispatch({type: "reset"})}}>reset</button>
//         <button onClick={()=>{dispatch({type: "TgColor"})}}>Change the color</button>
//         <p>{state.userInput}</p>
       
//         <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
//         <p>{deferred}</p>
//     </div>
//   )
// }

// export default Reducer


import React from 'react'
import { useNavigate } from 'react-router-dom';

const Reducer = () => {
    const navigate= useNavigate();
    const add= (e)=>{
        e.preventDefault();
        return navigate ('/ggg');
    }
  return (
    <>
    <div className='flex max-md:flex-col h-[100vh]  m-0'>
        <div className='bg-white p-4 m-auto max-md:w-[50%] text-black  mx-auto  '>
         <p className='text-4xl '>Create Your Account</p>
         <form onSubmit={add}>
            <p>Name</p>
            <input required className='border w-full border-gray-500 ' type="text " placeholder='Name' />
            <p>Email</p>
            <input required className='border max-md:w-[100%] border-gray-500' type="Email " placeholder='Email' />
            <p>Password</p>
            <input required className='border max-md:w-[100%] border-gray-500' type=" Password " placeholder='password' />
            <p>Retype Password</p>
            <input required className='border max-md:w-[100%] border-gray-500' type=" Password " placeholder='password' />
            <p>I accept all terms and condition</p>
            
            <button type='submit' className='bg-black block  text-white pr-5 mt-1 pl-5 '>Sign up</button>

         </form>
         <ReduxTool />
         <Form1 />
        </div>
        <div className='bg-black mx-auto flex w-[50%] text-white  items-center '>
            <p className='text-4xl mx-auto'>Posts will show Here</p>

        </div>

    </div>
    
    </>
  )
}

export default Reducer




