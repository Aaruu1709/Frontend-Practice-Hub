import { useState } from "react"

function HideShowPassword(){
    const[show,setShow]=useState(false)
    return (
        <>
            <h2>Password Toggle</h2>
            <input type={show ?"text" : "password"} placeholder="enter password here"/>
            <button onClick={()=>setShow(!show)}>{show? "hide password": "show password"}</button>
        </>
    )
}
export default HideShowPassword