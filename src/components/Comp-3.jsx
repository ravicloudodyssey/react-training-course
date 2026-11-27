

function Comp3({products}) {
    return (
        <div>
            <h3>Component 3 - Products List</h3>

            {products.map((product) => (
                <div key={product.id}>
                    <p>Product: {product.product}</p>
                    <p>Price: ₹{product.price}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Comp3;
