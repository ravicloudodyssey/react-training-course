function CustomerDetail(customer) {
  return (
    <div className="customer-detail">
        <h2>Customer Details</h2>   
        <p>Name: {customer.Name}</p>
        <p>Email: {customer.Email}</p>
        <p>Location: {customer.Location}</p>
    </div>
  );
}

export default CustomerDetail;