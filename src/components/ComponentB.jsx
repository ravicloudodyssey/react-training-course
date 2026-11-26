
function ComponentB({ employees }) {
    return (
        <div>
            <h2>Component B - Employee Details</h2>

            {employees.map((employee) => (
                <div key={employee.id}>
                    <h3>{employee.name}</h3>
                    <p>Role: {employee.role}</p>
                    <p>Salary: {employee.salary}</p>
                </div>
            ))}
        </div>
    );
}

export default ComponentB;
