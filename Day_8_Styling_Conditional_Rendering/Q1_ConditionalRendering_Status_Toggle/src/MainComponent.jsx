import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function MainComponent(){
    const [status,setStatus] = useState(false);
    const toggle = ()=>{
        setStatus(status=>!status);
    }

    return (
        <>
            <button onClick={toggle}>Toggle</button>
            {
               status ? <ComponentA/> : <ComponentB/> 
            }
        </>
    )
}

export default MainComponent;