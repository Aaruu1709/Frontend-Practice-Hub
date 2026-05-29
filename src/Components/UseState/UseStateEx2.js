import { useState } from "react";

function UseStateEx2 (){

    const[count,setCount]=useState(0);
    const handleIncrement=()=>{
       setCount(count+1);
    }
return(
    <>
        <h2>useState Hook: Counter example</h2>
        <h3>count:{count}</h3>
        <button onClick={handleIncrement}>Increment</button>
    </>
)
}
export default UseStateEx2;