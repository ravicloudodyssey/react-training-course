
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

function App() {

    // Student data
    const students = [
        {
            id: 1,
            name: "Pooja",
            age: 25,
            course: "React JS"
        },
        {
            id: 2,
            name: "Rahul",
            age: 24,
            course: "JavaScript"
        },
        {
            id: 3,
            name: "Amit",
            age: 23,
            course: "Node JS"
        }
    ];

    // Employee data
    const employees = [
        {
            id: 1,
            name: "Priya",
            role: "Frontend Developer",
            salary: 30000
        },
        {
            id: 2,
            name: "Rohit",
            role: "Backend Developer",
            salary: 40000
        },
        {
            id: 3,
            name: "Neha",
            role: "React Developer",
            salary: 35000
        }
    ];

    // Product data
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 50000,
            category: "Electronics"
        },
        {
            id: 2,
            name: "Mobile",
            price: 20000,
            category: "Electronics"
        },
        {
            id: 3,
            name: "Headphones",
            price: 2000,
            category: "Accessories"
        }
    ];

    return (
        <div>
            <h1>React Parent and Child Components</h1>

            <ComponentA students={students} />

            <ComponentB employees={employees} />

            <ComponentC products={products} />
        </div>
    );
}

export default App;
