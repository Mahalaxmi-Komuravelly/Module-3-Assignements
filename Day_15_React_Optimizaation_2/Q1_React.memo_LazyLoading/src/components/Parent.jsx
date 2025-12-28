import { useState } from "react";
import React,{ Suspense } from "react";

const Child = React.lazy(()=>import("./Child"));

const products = [
    { id: 1, name: "Product 1", price: 25.99 },
  { id: 2, name: "Product 2", price: 7.49 },
  { id: 3, name: "Product 3", price: 9.99 },
  { id: 4, name: "Product 4", price: 12.5 },
  { id: 5, name: "Product 5", price: 3.75 },
  { id: 6, name: "Product 6", price: 15.0 },
  { id: 7, name: "Product 7", price: 8.25 },
  { id: 8, name: "Product 8", price: 6.99 },
  { id: 9, name: "Product 9", price: 18.49 },
  { id: 10, name: "Product 10", price: 14.99 },
];
function Parent(){
    const [count,setCount] = useState(0);
    const handleCount = () =>{
        setCount(prevCount => prevCount + 1)
    }

    console.log("parent rendered");
    return(
        <>
            <h2>Count : {count}</h2>
            <button onClick={handleCount}>Increment Count</button>
            <Suspense fallback={<h3>Loading...</h3>}>
                <Child products = {products}/>
            </Suspense>
        </>
    )
}

export default Parent;