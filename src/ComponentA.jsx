import React from "react";

const ComponentA = (props) => {
    return(
        <div>
            <h1>This is Component A</h1>
            {props.employees.map((employee)=>(
                <div key={employee.id}>
                    <p>Employee ID: {employee.id}</p>
                    <p>Employee Name: {employee.name}</p>
                </div>
            ))}
        </div>
    )
}

export default ComponentA;