function CustomerDetail({ customer }) {
  return (
    <div className="customer-detail">
      <h2>Customer Details</h2>

      {customer.map((customer) => (

// here we use map fuction to iterate over customer array and display the customer deatils in UI 

        <div key={customer.id}>
          <hr></hr>
          <p>Name: {customer.Name}</p>
          <p>Email: {customer.Email}</p>
          <p>Location: {customer.Location}</p>

          <hr></hr>
        </div>
      ))
      }
    </div>
  );
} 

export default CustomerDetail;