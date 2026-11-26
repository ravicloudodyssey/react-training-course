
function ComponentA({ students }) {
    return (
        <div>
            <h2>Component A - Student Details</h2>

            {students.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>
                    <p>Age: {student.age}</p>
                    <p>Course: {student.course}</p>
                </div>
            ))}
        </div>
    );
}

export default ComponentA;
