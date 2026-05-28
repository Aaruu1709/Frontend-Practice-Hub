import React, { useState } from 'react'
import FunctionalComp from './FunctionalComp';

export default function FunctionalCaounter() {
    const [count , setCount]=useState(0);
  return (
    <div>
    <h1>functional counter</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <p>{count}</p>
<hr></hr>
    <FunctionalComp props={count}/>
    </div>
  )
}
