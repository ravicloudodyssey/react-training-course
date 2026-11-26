import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";


function Parent() {

  const products = [
    {
      id: 1,
      name: "Galaxy S23",
      price: 80000,
      brand: "Samsung"
    },
    {
      id: 2,
      name: "iPhone 14",
      price: 90000,
      brand: "Apple"
    },
    {
      id: 3,
      name: "One Plus 11",
      price: 90000,
      brand: "One Plus"
    },
    {
      id: 4,
      name: "Samsung Galaxy S25 FE",
      price: 90000,
      brand: "Samsung"
    },
    {
      id: 5,
      name: "iPhone 15 Plus",
      price: 100000,
      brand: "Apple"
    },
  ];

  const array = [1, 2, 3, 4, 5];
  array.forEach((item) => {
    console.log(item);
  });

  return (
    <>
      <ComponentA name="Ravi Kumar Reddy" empId="E123" isEmployee={true} />
      <ComponentB products={products} />
      <ComponentC products={products} />
    </>
  );
}

export default Parent;
