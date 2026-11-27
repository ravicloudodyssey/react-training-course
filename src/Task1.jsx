import {students,courses,products} from "./data/Task-1-data";
import Comp1 from "/src/components/Comp-1";
import Comp2 from "/src/components/Comp-2";
import Comp3 from "/src/components/Comp-3";

function task1() {
    return (
    <div>
        <hr/>
      <h3>Parent Components</h3>
      <Comp1 students={students} />
      <Comp2 courses={courses} />
      <Comp3 products={products} />
    </div>
    );
}
export default task1;