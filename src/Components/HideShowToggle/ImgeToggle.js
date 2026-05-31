import { useState } from "react"

function ImageToggle(){
    const[show,setShow]=useState(false)

    return(
        <>
            <p>Image toggle</p>
            <button onClick={()=>setShow(!show)}>{show? "show image": "hide image"}</button>
<hr></hr>
            {show && <img src="https://media.istockphoto.com/id/2237525197/photo/new-year-2026-concept-the-beginning-of-success-the-text-2026-written-on-the-asphalt-road-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=O8GENrlrr8KwQEfqJqPo6WR5scafje-NebqFXQ6dQbM=" alt="wait a moment"></img>}
        </>
    )
}
export default ImageToggle