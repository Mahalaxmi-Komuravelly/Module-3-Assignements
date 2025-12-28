function ProductList({ products, productSelection}){

    console.log("child renedered")

   return(
    
        products.map((product)=>{
          return <div className="card" key={product.id} onClick={()=>productSelection(product)}>
                <p>Id : {product.id}</p>
                <p>Name : {product.name}</p>
                <p>Price: {product.price}</p>
            </div>
            
        })
        
    
   ) 
}

export default ProductList;