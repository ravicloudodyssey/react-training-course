
function Comp2(props2) {
    return (
        <div>
            <h3>Component 2 - Courses List</h3>

            {props2.courses.map((course) => (
                <div key={course.id}>
                    <p>Course: {course.course}</p>
                    <p>Duration: {course.duration}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Comp2;
