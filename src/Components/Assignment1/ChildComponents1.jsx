export function ComponentA({ name }) {
    return (
        <div>
            <h3>Component A - DataType - {typeof (name)}</h3>
            <p>Name: {name}</p>
        </div>
    );
}

export function ComponentB({ age }) {
    return (
        <div>
            <h3>Component B - DataType - {typeof (age)}</h3>
            <p>Age: {age}</p>
        </div>
    );
}

export function ComponentC({ experience }) {
    return (
        <div>
            <h3>Component C - DataType - {typeof (experience)}</h3>
            <p>Experienced: {String(experience)}</p>
        </div>
    );
}

export function ComponentD({ skills }) {
    return (
        <div>
            <h3>Component D - DataType - {typeof (skills)}</h3>
            {Array.isArray(skills) && <p>{skills.map(each => Object.entries(each).map(([category, item]) => (
                <div key={category}>
                    <h4>{category}</h4>
                    <p>{item}</p>
                </div>
            )))}</p>}
        </div>
    );
}
