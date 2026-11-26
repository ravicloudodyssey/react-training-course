import React from "react";

import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const App = ()=>{
  let employees=[{id:101,name:"sita"},{id:102,name:"gita"}];
  let products=[{name:"Laptop",price:10000},{name:"Mobile",price:15000}];
  let students=[{id:1,marks:90},{id:2,marks:85}]
  return(
      <div>
          <h1>This is parent component</h1>
          <ComponentA employees={employees}/>
          <ComponentB products={products}/>
          <ComponentC students={students}/>
      </div>
  )
}
export default App;