import {useState} from "react";
import "./ToDo.css"

function ToDo(){
      // Store input value
  const [task, setTask] = useState("");
    // Store all todo tasks
  const [todos, setTodos] = useState([]);

  // Task 1: Add Todo
  function handleAdd() {

    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);

    // After added a task to Todo & Clear input
    setTask("");
  }

  // Task 3: Complete Todo
  function handleComplete(id)//001
   {

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );

  }

  // Task 4: Delete Todo
  function handleDelete(id) {

    setTodos(
      todos.filter((todo) => todo.id !== id)
    );

  }

  // Task 5: Todo Statistics
  const totalTasks = todos.length;

  const completedTasks = todos.filter(
    (todo) => todo.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

 return (
    <div className="todo-container">

      <h3>Todo List Application</h3>

      {/* Task 1: Add Todo */}

      <div className="input-section">

        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={handleAdd}>
          Add Task
        </button>

      </div>


      {/* Task 2: Display Todo List */}

      <h3>My Tasks</h3>

      <ul>

        {todos.map((todo) => (

          <li key={todo.id}>

            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleComplete(todo.id)}
            />

            <span
              className={
                todo.completed ? "completed" : ""
              }
            >
              {todo.text}
            </span>

            <button
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>


      {/* Task 5: Todo Statistics */}

      <div className="statistics">

        <h3>Todo Statistics</h3>

        <p>Total Tasks: {totalTasks}</p>

        <p>Completed Tasks: {completedTasks}</p>

        <p>Pending Tasks: {pendingTasks}</p>

      </div>

    </div>
);
}
export default ToDo;