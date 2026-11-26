function ComponentC({ products }) {

    const filteredProducts = () => {
        return products.filter((product) => product.brand === "Samsung");
    }

    return (
        <div>
            <h2>Component C</h2>
            <ul>
                {filteredProducts().map((product) => (
                    <li key={product.id}>
                        <p>Product Name: {product.name}</p>
                        <p>Price: ${product.price.toLocaleString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ComponentC;