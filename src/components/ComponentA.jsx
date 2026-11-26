function ComponentA({ name, empId, isEmployee }) {
    return (
        <div>
            <h2>Component A</h2>
            <p>Name: {name}</p>
            <p>Employee ID: {empId}</p>
            <p>Is Employee: {isEmployee ? "Yes" : "No"}</p>
        </div>
    )
}

export default ComponentA;