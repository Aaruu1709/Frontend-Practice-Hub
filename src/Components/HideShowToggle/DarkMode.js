import { useState } from "react"

function DarkMode(){

    const[dark,setDark]=useState(false)
return(
    <>
        <p>dark mode</p>
        <div style={{background: dark? "black" : "white", color:dark?"white": "black", height:"200px", width:"200px"}}>hii</div>
        <button onClick={()=>setDark(!dark)}>{dark ? "white mode": "black mode"}</button>
    </>
)
}
export default DarkMode