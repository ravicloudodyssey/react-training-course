function OrderDetail({ OrderID, Product, Quantity, status }) {
    return (
        <div className="order-detail">
            <h2>Order Details</h2>

            {/* this is the prop destructuring  : so we dont have to use product. repeatedly for all...  */}

            <p>Order ID: # {OrderID}</p>
            <p>Product: {Product}</p>
            <p>Quantity: {Quantity} nos</p>
            <p>Status: <strong>{status}</strong></p>
        </div>
    );
}

export default OrderDetail;