import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import OrderDetail from "./components/OrderDetail";
import CustomerDetail from "./components/CustomerDetail";
import Footer from "./components/Footer";

// importing all the components we created in the components folder to use in the app.jsx file

function App() {

  // creating a javascript object with properties for product, customer and order details
  // we can also create objects in data.jsx too and import in app.jsx

  const product = {
    Name: "Iphone 17",
    Brand: "Apple",
    Stock: 50,
    color: "Lavender",
    Price: 92000,
    Category: "Electronics",
    Description: "The iPhone 17 is the latest flagship smartphone from Apple",
  };

  const customer = {
    Name: "Cloud Odyssey",
    Email: "cloud.odyssey@example.com",
    Location: "Bangalore",
  };


  const order = {
    OrderID: 12345,
    Product: "Iphone 17",
    Quantity: 1,
    TotalPrice: 92000,
    status: "Delivered"
  };

  return (
    <>

      {/* adding header component */}

      <Header />

      <div className="app-container">

        {/* passing the props to the product list child component */}

        <ProductList
          Name={product.Name}

          //  the left side Name is the Prop and the Product.Name is the value we are passing to the prop

          Brand={product.Brand}
          Stock={product.Stock}
          color={product.color}
          Price={product.Price}
          Category={product.Category}

        // Description={product.Description}

        // here I have commented the description prop im not sending this to child component that's why we cant see the description in the UI.

        />

        <div>
          {/* passing the props to the customer detail child component */}

          <CustomerDetail
            Name={customer.Name}
            Email={customer.Email}
            Location={customer.Location} />

          {/* passing the props to the order detail child component */}

          <OrderDetail
            OrderID={order.OrderID}
            Product={order.Product}
            Quantity={order.Quantity}
            status={order.status} />
        </div>
      </div>

      {/* adding footer component */}

      <Footer />

    </>
  );
}
export default App;