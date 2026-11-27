import childComp from './ChildComponents';
import details from './Details';

// TASK 1: Understand how to create and reuse React components and how to pass data from a parent component to child components using props.

//Treating this component as Parent
function Assignment1() {
  return (
    <div>
      <childComp.Teachers details={details.teacher_data} />
      <childComp.Students details={details.stud_data} />
      <childComp.Parents details={details.parent_data} />
    </div>
  )
}

export default Assignment1;