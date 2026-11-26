import {ComponentA, ComponentB, ComponentC, ComponentD} from "./ChildComponents1";

export default function Assignment1(){
    const data = {
        name: "Gunnam Sriram",
        age: 28,
        experienced: true,
        skills: [
            {Testing: "Automation"},
            {Development: "React"}
        ]
    };
    return(
        <div>
            <ComponentA name={data.name} />
            <ComponentB age={data.age} />
            <ComponentC experience={data.experienced} />
            <ComponentD skills={data.skills} />
        </div>
    );
}
