import "./styles.css";
import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
function App() {
  const [todos, setTodos] = useState([
    { text: "Выучить JS", isCompleted: false },
    { text: "Подоить корову", isCompleted: false },
    { text: "Сделать домашку", isCompleted: false }
  ]);
  const addTodo = (text) => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };
  const completeTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].isCompleted = !newTodo[index].isCompleted;
    setTodos(newTodo);
  };
  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => {
          return (
            <Todo
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              key={index}
              todo={todo}
              index={index}
            />
          );
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;
