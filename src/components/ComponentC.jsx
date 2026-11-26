
function ComponentC({ products }) {
    return (
        <div>
            <h2>Component C - Product Details</h2>

            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: ₹{product.price}</p>
                    <p>Category: {product.category}</p>
                </div>
            ))}
        </div>
    );
}

export default ComponentC;
