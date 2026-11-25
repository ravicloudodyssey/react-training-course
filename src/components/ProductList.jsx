function ProductList(product) {

    // here we are receiving the product details as props from the parent component
    // The [product] is the parameter which recives the props from the partent component

    return (
        <div className="product-list">
            <h2>Product List</h2>

            {/*  here we are displaying the product details in the UI by using the props we received from the parent component */}

            <p>Name: {product.Name}</p>
            <p>Brand: {product.Brand}</p>
            <p>Stock: {product.Stock}</p>
            <p>Color: {product.color}</p>
            <p>Price: {product.Price}</p>
            <p>Category: {product.Category}</p>
            <p>Description: {product.Description}</p>

        </div>
    );
}

export default ProductList;