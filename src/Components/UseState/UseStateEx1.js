import React, { useState } from 'react'

export default function UseStateEx1() {

    const[name,setName]=useState("aaruu");

    const handleChange=(event)=>{

        setName(event.target.value);
    };
      return (
    <div>
    <h1>useState hook Example</h1>
    <input type="text"
    placeholder='type something'
    value={name}
    onChange={handleChange}/>

    <h3>changes: {name}</h3>

    </div>
  )
}
