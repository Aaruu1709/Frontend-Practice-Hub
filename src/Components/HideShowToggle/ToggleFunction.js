import { useState } from "react";
function ToggleFunction(){
    const[count,setCount]=useState(1);
return(
    <>
        <h2>display hide and show functionalities</h2>
        <p>{count}</p>
         {/* {count==0 ? <p>condition 0 </p>: null} */}
        <button onClick={()=>setCount(count+1)}>Display</button>
        {
            count==0 ? <p>condition 0</p>:
            count==1 ? <p>condition 1</p>:
            count==2 ? <p>condition 2</p>:
            count==3 ? <p>condition 3</p>:
            <p>other condiion</p>
        }
    </>
)
}
export default ToggleFunction;