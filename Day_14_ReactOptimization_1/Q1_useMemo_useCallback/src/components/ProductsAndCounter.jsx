import { useCallback, useMemo, useState } from "react";
import ProductList from "./ProductList";
function ProductsAndCounter(){
    const products = useMemo(()=>{
        return [
  { id: 1, name: "Product 1", price: 5.99 },
  { id: 2, name: "Product 2", price: 7.49 },
  { id: 3, name: "Product 3", price: 9.99 },
  { id: 4, name: "Product 4", price: 12.5 },
  { id: 5, name: "Product 5", price: 3.75 },
  { id: 6, name: "Product 6", price: 15.0 },
  { id: 7, name: "Product 7", price: 8.25 },
  { id: 8, name: "Product 8", price: 6.99 },
  { id: 9, name: "Product 9", price: 18.49 },
  { id: 10, name: "Product 10", price: 4.99 },
  { id: 11, name: "Product 11", price: 11.75 },
  { id: 12, name: "Product 12", price: 2.99 },
  { id: 13, name: "Product 13", price: 21.0 },
  { id: 14, name: "Product 14", price: 16.5 },
  { id: 15, name: "Product 15", price: 9.5 },
  { id: 16, name: "Product 16", price: 13.99 },
  { id: 17, name: "Product 17", price: 19.99 },
  { id: 18, name: "Product 18", price: 7.0 },
  { id: 19, name: "Product 19", price: 5.49 },
  { id: 20, name: "Product 20", price: 14.25 },
  { id: 21, name: "Product 21", price: 6.75 },
  { id: 22, name: "Product 22", price: 10.0 },
  { id: 23, name: "Product 23", price: 17.99 },
  { id: 24, name: "Product 24", price: 8.99 },
  { id: 25, name: "Product 25", price: 3.49 },
  { id: 26, name: "Product 26", price: 22.5 },
  { id: 27, name: "Product 27", price: 12.99 },
  { id: 28, name: "Product 28", price: 4.25 },
  { id: 29, name: "Product 29", price: 9.25 },
  { id: 30, name: "Product 30", price: 16.99 }
]},[]);

    const [count,setCount] = useState(0);
    const increment = ()=>{
        setCount(prevCount => prevCount + 1);
        console.log("count incremented")
    }

    const total = useMemo(()=>{
      console.log("total calculated");
      return  products.reduce((sum,product)=>sum + product.price,0)
    },[products]);

    const handleProductSelection = useCallback((product) => {
        
        console.log("product selected",product);
    },[products])

    console.log("parent rendered")
    return (
        <>
            <h3>Total Price of Products is : {total}</h3>
            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button>
            <ProductList products = {products} productSelection = {handleProductSelection}/>
        </>
    )
}

export default ProductsAndCounter;