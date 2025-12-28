import React from "react";
function Child({ products }){
    console.log("child rendered");
    return(
        <div>
            <h3>Lazy Loading...</h3>
            {products.map((product)=>(
                
                <div className="card" key={product.id}>
                    <h4>Product Name : {product.name}</h4>
                    <p>Price : {product.price}</p>
                </div>
                
            ))}
            
        </div>
    )
}

export default React.memo(Child);