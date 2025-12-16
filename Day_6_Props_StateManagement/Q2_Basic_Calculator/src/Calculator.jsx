import { useState } from "react";

function Calculator(){
    const [num1,setNumber1] = useState(0);
    const [num2,setNumber2] = useState(0);
    const [operation,setOperation]=useState();
    const [result,setResult] = useState([]);

    
    const action = ()=>{
        
        let result = 0;
        if(operation === "Add"){
            result=num1 + num2;
        }
        else if(operation === "Subtract"){
            result=num1 - num2;
        }
        else if(operation === "Multiply"){
            result=num1 * num2;
        }

        const entry = {
            num1,
            num2,
            operation,
            result
        }

        setResult((prevResult)=>[...prevResult,entry]);
        
    }

    const clearInputs=()=>{
        setNumber1("");
        setNumber2("");
        setOperation("");
    }

    return (
        <div>
            <h2>Basic Calculator</h2>
            <input 
            type="number" 
            value={num1}
            onChange={(e)=>setNumber1(Number(e.target.value))}
            placeholder="Enter first number" 
            />

            <input 
            type="number"
            value={num2}
            onChange={(e)=>setNumber2(Number(e.target.value))} 
            placeholder="Enter second number" 
            />

            <select value={operation} onChange={(e)=>setOperation(e.target.value)}>
                <option value="">Select Operation</option>
                <option value="Add">Add</option>
                <option value="Subtract">Subtract</option>
                <option value="Multiply">Multiply</option>
            </select>
            <button onClick={action}>Perform Action</button>
            <button onClick={clearInputs}>Clear Inputs</button>
            <h3>Results</h3>
            <ul>
                {
                    result.map((item,index)=>(
                        <li key={index}>
                            The {item.operation} of {item.num1} and {item.num2} is : <strong>{item.result}</strong>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )

}

export default Calculator;