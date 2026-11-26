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

  // customer array with multiple customer objects 

  const customer = [
    {
      id: 1,
      Name: "Cloud Odyssey",
      Email: "cloud.odyssey@example.com",
      Location: "Bangalore",
    },
    {
      id: 2,
      Name: "Commerce Cloud",
      Email: "commerce.cloud@example.com",
      Location: "Hydrabad",
    },
    {
      id: 3,
      Name: "Marketing Cloud",
      Email: "marketing.cloud@example.com",
      Location: "Chennai",
    }
  ]


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
          Brand={product.Brand}
          Stock={product.Stock}
          color={product.color}
          Price={product.Price}
          Category={product.Category}
        // Description={product.Description}

        // here I have commented the description prop im not sending this to child component that's why we cant see the description in the UI.
        //  the left side Name is the Prop and the Product.Name is the value we are passing to the prop
        />

        {/* for Customer Details Component we use Map function to iterate over the customer array */}

        <CustomerDetail customer={customer} />

        {/* passing the props to the order detail child component */}

        <OrderDetail
          OrderID={order.OrderID}
          Product={order.Product}
          Quantity={order.Quantity}
          status={order.status} />

      </div>

      {/* adding footer component */}

      <Footer />

    </>
  );
}
export default App;