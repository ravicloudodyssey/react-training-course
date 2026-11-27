
function Comp2({courses}) {
    return (
        <div>
            <h3>Component 2 - Courses List</h3>

            {courses.map((course) => (
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
