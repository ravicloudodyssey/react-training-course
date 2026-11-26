import React from "react";
const ComponentB = ({products}) => {
    return(
        <div>
            <h1>This is Component B</h1>
            {products.map((product)=>(
                <div>
                    <p>Product Name: {product.name}</p>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default ComponentB;