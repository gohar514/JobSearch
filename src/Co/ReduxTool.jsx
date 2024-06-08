import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../slice/CounterSlice';
import { useState } from 'react';

const ReduxTool = () => {
    const count = useSelector(state=>state.counter.value);
    const dispatch= useDispatch();
    const [toggle , setToggle]= useState(true);
    const handle =()=>{
      setToggle(!toggle);
    }
    
  return (
    <div className={toggle ? 'bg-pink-700' : 'bg-slate-600'}>
      <button onClick={handle}  >click</button>
        <p  >{count}</p>
        <button onClick={()=>dispatch(increment())}>add</button>
        <button onClick={()=>dispatch(decrement())}>subtract</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default ReduxTool