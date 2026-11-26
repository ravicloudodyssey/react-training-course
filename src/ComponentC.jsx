import React from "react";

const ComponentC = ({students}) => {
    return(
        <div>
            <h1>This is Component C</h1>
            {students.map((student) => (
                <div>
                  <p>ID: {student.id}</p>
                   <p>Marks: {student.marks}</p>
                </div>
            ))}
        </div>
    )
}

export default ComponentC;