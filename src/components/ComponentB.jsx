function ComponentB({ products }) {
    return (
        <div>
            <h2>Component B</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <p>Product Name: {product.name}</p>
                        <p>Price: ${product.price.toLocaleString()}</p>
                        <p>Brand: {product.brand}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ComponentB;