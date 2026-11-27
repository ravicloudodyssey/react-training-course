// Child Components for Assignment1

function Teachers(data) {
  return (
    <div>
      <table border="1">
        <tr>Teachers Details</tr>
        <tr>
          <th>Name</th>
          <th>Subject</th>
        </tr>
        {data.details.map((teacher) => (
          <tr>
            <td>{teacher.name}</td>
            <td>{teacher.subject}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}


function Students(data) {
  return (
    <div>
      <table border="1">
        <tr>Students Details</tr>
        <tr>
          <th>Name</th>
          <th>Marks Scored</th>
        </tr>
        {data.details.map((student) => (
          <tr>
            <td>{student.name}</td>
            <td>{student.marks_scored}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

function Parents(data) {
  return (
    <div>
      <table border="1">
        <tr>Parents Details</tr>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Parent of</th>
        </tr>
        {data.details.map((parent) => (
          <tr>
            <td>{parent.name}</td>
            <td>{parent.phNum}</td>
            <td>{parent.child}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default { Teachers, Students, Parents };