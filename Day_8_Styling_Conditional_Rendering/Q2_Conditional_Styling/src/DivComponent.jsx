import { useState } from "react";

function DivComponent(){

    const[colour,setColor] = useState(true)
    const colorToggle = ()=>{
        setColor(prevColour=>!prevColour)
    }
        return (
            <>
                {
                    colour ? <div style={{color:"red"}}>This is a Div Element</div> :
                             <div style={{color:"blue"}}>This is a Div Element</div>
                }
                <button onClick={colorToggle}>Color Toggle</button>
            </>
        )
}

export default DivComponent;