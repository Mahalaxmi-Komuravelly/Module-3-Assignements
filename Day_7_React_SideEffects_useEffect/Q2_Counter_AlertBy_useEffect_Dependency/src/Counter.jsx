import { useEffect, useState } from "react";

function Counter(){

    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount((prevCount)=>prevCount+1);
    }  
    useEffect(()=>{
        if(count !==0 && count % 3 === 0){
            alert(`The current number ${count} is divisible by 3`);
        }
    },[count]);

    return(
        <>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increment</button>
        </>
    )
}

export default Counter;