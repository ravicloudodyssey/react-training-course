
function Comp1(props1) {
    return(
        <div>
      <h3>Component 1 - Students List</h3>

      {props1.students.map((student) => (
        <div className="student" key={student.id}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <hr />
        </div>
      ))}
    </div>
    );
}


export default Comp1;